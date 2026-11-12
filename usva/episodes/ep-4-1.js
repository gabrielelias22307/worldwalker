/* TRAILWALKER · Episode 4.1 · New Visions: the Louisiana Purchase and the War of 1812 (VUS)
   St. Louis, May 1804: a French-built river town on the west bank of the Mississippi, near where the Missouri
   flows in. North edge (rows 1-2): the Missouri joining the Mississippi (x 25-28, east side). East bank: Illinois woods,
   where the Corps of Discovery camped at River Dubois. North-west: the long common fields (wheat, corn) and a farmhouse.
   North-east: the levee with a stone warehouse, stalls and a dock. South-west: the fur post and an old Spanish stone
   tower. South-east: the government house (where the flags changed in March 1804), a house, the market and a dock.
   The journal stone: three levers (river, port, seller) — only the true setting opens the river to farmers' trade. */
window.EPISODE = {
  id: '4.1',
  realm: 4,
  sol: 'VUS',
  title: { en: 'New Visions', es: 'Nuevas visiones', fa: 'دیدگاه‌های نو' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'St. Louis, 1804', es: 'San Luis, 1804', fa: 'سنت لوئیس، ۱۸۰۴' },
  intro: [
    { en: 'The Grump blurred the page about the [[louisiana purchase|Louisiana Purchase]]. The river trade is stuck!',
      es: 'El Gruñón borró la página de la [[louisiana purchase|Compra de Luisiana]]. ¡El comercio del río se trabó!',
      fa: 'غرغرو صفحهٔ [[louisiana purchase|خرید لوئیزیانا]] را تار کرد. تجارت دریا گیر مانده است!' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: St. Louis on the map, 1804 on the timeline */
  scenes: {
    at: [-90.19, 38.63],
    year: 1804,
    start: [
      { en: 'In 1803, the United States bought a huge land called Louisiana.',
        es: 'En 1803, Estados Unidos compró una tierra enorme llamada Luisiana.',
        fa: 'در سال ۱۸۰۳، ایالات متحده سرزمین بسیار بزرگی به نام لوئیزیانا را خرید.' },
      { en: 'It stretched from the Mississippi River west to the Rocky Mountains.',
        es: 'Iba desde el río Misisipi, al oeste, hasta las montañas Rocosas.',
        fa: 'این سرزمین از دریای می‌سی‌سی‌پی به طرف غرب تا کوه‌های راکی می‌رسید.' },
      { en: 'In May 1804, Lewis and Clark set out near St. Louis to explore it.',
        es: 'En mayo de 1804, Lewis y Clark salieron cerca de San Luis para explorarla.',
        fa: 'در ماه می ۱۸۰۴، لوئیس و کلارک از نزدیک سنت لوئیس برای کشف آن حرکت کردند.' }
    ],
    page: { en: 'The Louisiana Purchase cost less than 3 cents an acre.',
      es: 'La Compra de Luisiana costó menos de 3 centavos por acre.',
      fa: 'خرید لوئیزیانا برای هر جریب کمتر از ۳ سنت قیمت داشت.' },
    guess: {
      q: { en: 'The US bought Louisiana in 1803. What happened to the size of the country?', es: 'Estados Unidos compró Luisiana en 1803. ¿Qué pasó con el tamaño del país?', fa: 'ایالات متحده در سال ۱۸۰۳ لوئیزیانا را خرید. اندازهٔ کشور چه شد؟' },
      choices: [
        { t: { en: '🗺️ It about doubled', es: '🗺️ Casi se duplicó', fa: '🗺️ تقریباً دو برابر شد' }, ok: true },
        { t: { en: '📉 It got smaller', es: '📉 Se hizo más pequeño', fa: '📉 کوچک‌تر شد' } }
      ],
      why: { en: 'The new land was about as big as the whole country before. The US about doubled.', es: 'La tierra nueva era casi tan grande como todo el país de antes. El país casi se duplicó.', fa: 'زمین نو تقریباً به اندازهٔ تمام کشور قبلی بود. ایالات متحده تقریباً دو برابر شد.' }
    },
    next: {
      q: { en: 'Next: the Erie Canal, 1825. How did canals change trade?', es: 'Ahora: el canal de Erie, 1825. ¿Cómo cambiaron los canales el comercio?', fa: 'بعدی: کانال ایری، ۱۸۲۵. کانال‌ها تجارت را چطور تغییر دادند؟' },
      choices: [
        { t: { en: '🛶 Goods moved faster and cheaper', es: '🛶 Las mercancías viajaron más rápido y barato', fa: '🛶 اجناس تیزتر و ارزان‌تر رفتند' }, ok: true },
        { t: { en: '🚫 Trade stopped for good', es: '🚫 El comercio se detuvo para siempre', fa: '🚫 تجارت برای همیشه ایستاد' } }
      ],
      why: { en: 'Canals joined rivers and lakes. Boats carried goods for less money and in less time.', es: 'Los canales unieron ríos y lagos. Los barcos llevaban mercancías con menos dinero y en menos tiempo.', fa: 'کانال‌ها دریاها و جهیل‌ها را وصل کردند. کشتی‌ها اجناس را با پول کمتر و در وقت کمتر بردند.' }
    }
  },
  /* houses: who lives behind each door */
  houses: [
    { at: [12, 8], name: { en: 'Sarah', es: 'Sarah', fa: 'سارا' },
      look: { skin: 1, hair: '#8a5a2a', shirt: '#6a8a5a', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'Come in! We grow corn and wheat in the long fields outside town.', es: '¡Pasa! Sembramos maíz y trigo en los campos largos fuera del pueblo.', fa: 'بیا داخل! ما در کشتزارهای دراز بیرون شهر جواری و گندم می‌کاریم.' },
        { en: 'Our flour goes down the river on flatboats. That is how we earn money.', es: 'Nuestra harina baja por el río en barcazas. Así ganamos dinero.', fa: 'آرد ما با کشتی‌های هموار به پایین دریا می‌رود. این‌طور پول پیدا می‌کنیم.' }
      ] },
    { at: [4, 13], name: { en: 'Grandmother Hélène', es: 'Abuela Hélène', fa: 'مادرکلان هلن' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#4a3a6a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'My husband traded with the Osage people for forty years.', es: 'Mi esposo comerció con el pueblo osage durante cuarenta años.', fa: 'شوهرم چهل سال با مردم اوسیج تجارت کرد.' },
        { en: 'Furs from here go to New Orleans, then on ships to Europe.', es: 'Las pieles de aquí van a Nueva Orleans y luego en barcos a Europa.', fa: 'پوست‌های اینجا به نیواورلینز می‌روند، بعد با کشتی به اروپا.' }
      ] },
    { at: [17, 13], name: { en: 'Señor Ortiz', es: 'Señor Ortiz', fa: 'آقای اورتیز' },
      look: { skin: 2, hair: '#3a3a3a', shirt: '#2a3a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I wrote letters for the Spanish governor. Now the Americans run this house.', es: 'Yo escribía cartas para el gobernador español. Ahora los estadounidenses mandan aquí.', fa: 'من برای والی هسپانوی نامه می‌نوشتم. حالا امریکایی‌ها این خانه را اداره می‌کنند.' },
        { en: 'Mr. Jefferson was not sure the [[constitution|Constitution]] let him buy land.', es: 'El señor Jefferson no estaba seguro de que la [[constitution|Constitución]] le dejara comprar tierras.', fa: 'آقای جفرسن مطمئن نبود که [[constitution|قانون اساسی]] به او اجازهٔ خرید زمین بدهد.' },
        { en: 'He bought Louisiana anyway. The chance was too good to lose.', es: 'Igual compró Luisiana. La oportunidad era demasiado buena para perderla.', fa: 'با این هم لوئیزیانا را خرید. این فرصت خوب‌تر از آن بود که از دست برود.' }
      ] },
    { at: [22, 13], name: { en: 'Pierre', es: 'Pierre', fa: 'پیر' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#c06a2a', pants: '#3a3a5a', style: 'short' },
      lines: [
        { en: 'My big brother will row a boat for Captains Lewis and Clark!', es: '¡Mi hermano mayor va a remar un bote para los capitanes Lewis y Clark!', fa: 'برادر کلانم برای کپتان لوئیس و کلارک قایق می‌راند!' },
        { en: 'They will go up the Missouri River and try to reach the Pacific.', es: 'Subirán por el río Misuri y tratarán de llegar al Pacífico.', fa: 'آن‌ها از دریای میزوری بالا می‌روند و می‌کوشند به بحر آرام برسند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. Rows 1-2: the Missouri flowing east into the Mississippi (x 25-28). Row 3: the sandy bank.
     x 24: the levee (sand) along the Mississippi; docks (k) on rows 6 and 16. x 29-30: Illinois woods on the east bank.
     Roads: row 10 (dirt, then paving), row 15 (paving), x 6 (dirt) and x 20 (paved street). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTT~==~TTT',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~==~TPT',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~==~TPT',
    'Tssssssssssssssssssssssss~==~TTT',
    'T.x...:..2222...JJJ.lmm.s~==~TPT',
    'T.www.:..2222.x.JJJ.l...s~==~TPT',
    'T.www.:.............l...skk=~TTT',
    'T.....:....RRR......l...s~==~TPT',
    'T.www.:....hdh....x.l...s~==~TPT',
    'T.....:.............l...s~==~TTT',
    'T:::::::::::::::lllllllls~==~TPT',
    'T.....:.............l...s~==~TPT',
    'T.QQQQ:..mm...x.QQQ.lRRRs~==~TTT',
    'T.hhdh:.........hdh.lhdhs~==~TPT',
    'T.....:.............l...s~==~TPT',
    'T.....:llllllllllllllllls~==~TTT',
    'T.....:.............l...skk=~TPT',
    'T.WW..:.............l..xs~==~TPT',
    'T.WW..:..2222...mm..l...s~==~TTT',
    'T.....:..2222.......l...s~==~TPT',
    'T.....:.............l...s~==~TPT',
    'TTTTTTTTTTTTTTTTTTTTTTTTT~==~TTT'
  ],
  start: [22, 19],

  /* finds: a clue note leads to a hidden spot (+3 coins and a camp decoration) */
  finds: [
    { clueAt: [8, 8], at: [8, 5], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps north. Look between the wheat and the corn.', es: 'Desde esta nota, camina 3 pasos al norte. Busca entre el trigo y el maíz.', fa: 'از این یادداشت، ۳ قدم به شمال برو. میان گندم و جواری را ببین.' },
      text: { en: 'Farmers here often paid with Spanish silver dollars. Here is one!', es: 'Los agricultores de aquí muchas veces pagaban con dólares españoles de plata. ¡Aquí hay uno!', fa: 'دهقانان اینجا اکثراً با دالرهای نقره‌ای هسپانوی پول می‌دادند. اینجا یکی است!' } },
    { clueAt: [11, 16], at: [7, 19], decor: 'drum',
      clue: { en: 'From this note, walk 4 steps west, then 3 steps south.', es: 'Desde esta nota, camina 4 pasos al oeste y luego 3 pasos al sur.', fa: 'از این یادداشت، ۴ قدم به غرب برو، بعد ۳ قدم به جنوب.' },
      text: { en: 'In January 1815, the US won the Battle of New Orleans. Peace was already signed!', es: 'En enero de 1815, EE. UU. ganó la batalla de Nueva Orleans. ¡La paz ya estaba firmada!', fa: 'در جنوری ۱۸۱۵، امریکا جنگ نیواورلینز را برد. صلح از قبل امضا شده بود!' } }
  ],

  words: {
    'louisiana purchase': { en: 'the huge land the US bought from France in 1803', es: 'la tierra enorme que EE. UU. le compró a Francia en 1803', fa: 'سرزمین بسیار بزرگی که امریکا در سال ۱۸۰۳ از فرانسه خرید' },
    constitution: { en: 'the plan and highest law of the US government', es: 'el plan y la ley más alta del gobierno de EE. UU.', fa: 'نقشه و بالاترین قانون حکومت امریکا' },
    port: { en: 'a town where boats and ships load and unload goods', es: 'un pueblo donde los barcos cargan y descargan mercancías', fa: 'شهری که کشتی‌ها در آن اجناس را بار و خالی می‌کنند' },
    'fur trade': { en: 'buying and selling animal furs and hides', es: 'la compra y venta de pieles de animales', fa: 'خرید و فروش پوست حیوانات' },
    expedition: { en: 'a long trip to explore a place', es: 'un viaje largo para explorar un lugar', fa: 'یک سفر دراز برای کشف یک جا' },
    interpreter: { en: 'a person who helps people with different languages understand each other', es: 'una persona que ayuda a entenderse a gente de idiomas distintos', fa: 'کسی که به مردمِ زبان‌های مختلف کمک می‌کند همدیگر را بفهمند' },
    impressment: { en: 'taking sailors by force to work on another country\'s ships', es: 'llevarse a marineros a la fuerza para trabajar en barcos de otro país', fa: 'به زور بردن ملاحان برای کار در کشتی‌های یک کشور دیگر' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' }
  },

  npcs: [
    {
      x: 4, y: 7,
      name: { en: 'Amos', es: 'Amos', fa: 'آموس' },
      role: { en: 'Farmer', es: 'Agricultor', fa: 'دهقان' },
      look: { skin: 1, hair: '#a0682a', shirt: '#a04a2a', pants: '#4a3a2a', hat: '#6a4a2a' },
      lines: [
        { en: 'Howdy! I came west from Kentucky to farm this good river land.', es: '¡Hola! Vine al oeste desde Kentucky para cultivar esta buena tierra del río.', fa: 'سلام! از کنتاکی به غرب آمدم تا در این زمین خوب کنار دریا دهقانی کنم.' },
        { en: 'President Jefferson dreams of a nation of small farmers, like me.', es: 'El presidente Jefferson sueña con una nación de pequeños agricultores, como yo.', fa: 'رئیس جمهور جفرسن آرزوی ملتی از دهقانان کوچک، مثل من، را دارد.' },
        { en: 'Mr. Hamilton wanted something else: trade, big cities and banks.', es: 'El señor Hamilton quería otra cosa: comercio, ciudades grandes y bancos.', fa: 'آقای همیلتن چیز دیگری می‌خواست: تجارت، شهرهای بزرگ و بانک‌ها.' },
        { en: 'My corn floats down the Mississippi to the [[port|port]] of New Orleans.', es: 'Mi maíz baja por el Misisipi hasta el [[port|puerto]] de Nueva Orleans.', fa: 'جواری من از دریای می‌سی‌سی‌پی تا [[port|بندر]] نیواورلینز پایین می‌رود.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why do farmers in the West need the port of New Orleans?', es: '¿Por qué los agricultores del oeste necesitan el puerto de Nueva Orleans?', fa: 'چرا دهقانان غرب به بندر نیواورلینز ضرورت دارند؟' },
        choices: [
          { ok: true, t: { en: 'Their crops float down the river to it', es: 'Sus cosechas bajan por el río hasta allí', fa: 'حاصلات‌شان از راه دریا به آنجا می‌رود' },
            why: { en: 'Yes! Boats carry crops down the Mississippi to New Orleans. Ships take them on to the world.', es: '¡Sí! Los botes llevan las cosechas por el Misisipi a Nueva Orleans. Los barcos las llevan al mundo.', fa: 'بله! قایق‌ها حاصلات را از می‌سی‌سی‌پی به نیواورلینز می‌برند. کشتی‌ها آن را به جهان می‌برند.' } },
          { t: { en: 'It is the only place to buy farmland', es: 'Es el único lugar para comprar tierras', fa: 'تنها جایی است که زمین زراعتی می‌فروشد' },
            why: { en: 'Farmers buy land in many places. They need New Orleans to sell their crops.', es: 'Los agricultores compran tierras en muchos lugares. Necesitan Nueva Orleans para vender sus cosechas.', fa: 'دهقانان در جاهای زیاد زمین می‌خرند. برای فروش حاصلات به نیواورلینز ضرورت دارند.' } },
          { t: { en: 'It is the capital of the United States', es: 'Es la capital de Estados Unidos', fa: 'پایتخت ایالات متحده است' },
            why: { en: 'The capital is Washington, D.C. New Orleans is a port at the mouth of the Mississippi.', es: 'La capital es Washington D. C. Nueva Orleans es un puerto en la boca del Misisipi.', fa: 'پایتخت واشنگتن دی‌سی است. نیواورلینز بندری در دهانهٔ می‌سی‌سی‌پی است.' } }
        ]
      }
    },
    {
      x: 11, y: 14,
      name: { en: 'Marguerite', es: 'Marguerite', fa: 'مارگریت' },
      role: { en: 'Osage and French trader', es: 'Comerciante osage y francesa', fa: 'سوداگر اوسیج و فرانسوی' },
      look: { skin: 3, hair: '#120c08', shirt: '#2a6a8a', pants: '#6a3a2a', style: 'long' },
      lines: [
        { en: 'My mother is Osage. My father is a French fur trader.', es: 'Mi madre es osage. Mi padre es un comerciante francés de pieles.', fa: 'مادرم اوسیج است. پدرم یک سوداگر فرانسوی پوست است.' },
        { en: 'Osage hunters trade deer hides and furs here for cloth and tools.', es: 'Los cazadores osage cambian aquí cueros de venado y pieles por tela y herramientas.', fa: 'شکارچیان اوسیج اینجا پوست آهو و پوست‌ها را با تکه و ابزار عوض می‌کنند.' },
        { en: 'France sold this land. But it was home to many Native nations.', es: 'Francia vendió esta tierra. Pero era el hogar de muchas naciones indígenas.', fa: 'فرانسه این سرزمین را فروخت. اما خانهٔ ملت‌های بومی زیادی بود.' },
        { en: 'Osage, Lakota, Mandan, Shoshone... No one asked the nations who live there.', es: 'Osage, lakota, mandan, shoshone... Nadie les preguntó a las naciones que viven allí.', fa: 'اوسیج، لاکوتا، مندان، شوشونی... هیچ کس از ملت‌هایی که آنجا زندگی می‌کنند نپرسید.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Who already lived on the Louisiana land in 1803?', es: '¿Quiénes ya vivían en la tierra de Luisiana en 1803?', fa: 'در سال ۱۸۰۳ چه کسانی از قبل در سرزمین لوئیزیانا زندگی می‌کردند؟' },
        choices: [
          { ok: true, t: { en: 'Many Native nations, like the Osage', es: 'Muchas naciones indígenas, como los osage', fa: 'ملت‌های بومی زیاد، مثل اوسیج' },
            why: { en: 'Yes. Many nations lived there. France sold the land without asking them.', es: 'Sí. Muchas naciones vivían allí. Francia vendió la tierra sin preguntarles.', fa: 'بله. ملت‌های زیادی آنجا زندگی می‌کردند. فرانسه بدون پرسیدن از آن‌ها زمین را فروخت.' } },
          { t: { en: 'No one, the land was empty then', es: 'Nadie, la tierra estaba vacía', fa: 'هیچ کس، زمین آن وقت خالی بود' },
            why: { en: 'The land was not empty. Many Native nations had lived there for a very long time.', es: 'La tierra no estaba vacía. Muchas naciones indígenas vivían allí desde hacía mucho tiempo.', fa: 'زمین خالی نبود. ملت‌های بومی زیادی از زمان‌های بسیار دور آنجا زندگی می‌کردند.' } },
          { t: { en: 'Only soldiers sent there by France', es: 'Solo soldados enviados por Francia', fa: 'فقط عسکرهایی که فرانسه فرستاده بود' },
            why: { en: 'Few French soldiers were there. The land was home to many Native nations.', es: 'Había pocos soldados franceses. La tierra era el hogar de muchas naciones indígenas.', fa: 'عسکرهای فرانسوی کم بودند. این سرزمین خانهٔ ملت‌های بومی زیادی بود.' } }
        ]
      }
    },
    {
      x: 18, y: 16,
      name: { en: 'Madame Odile', es: 'Madame Odile', fa: 'مادام اودیل' },
      role: { en: 'Shopkeeper', es: 'Tendera', fa: 'دکاندار' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#8a2a4a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Bonjour! French families built St. Louis forty years ago.', es: '¡Bonjour! Familias francesas construyeron San Luis hace cuarenta años.', fa: 'بونژور! خانواده‌های فرانسوی سنت لوئیس را چهل سال پیش ساختند.' },
        { en: 'Then Spain ruled here. In 1800, Spain gave Louisiana back to France.', es: 'Después gobernó España. En 1800, España le devolvió Luisiana a Francia.', fa: 'بعد هسپانیه اینجا حکومت کرد. در سال ۱۸۰۰، هسپانیه لوئیزیانا را به فرانسه پس داد.' },
        { en: 'In 1803, Napoleon of France sold it to the United States for $15 million!', es: '¡En 1803, Napoleón de Francia se la vendió a Estados Unidos por 15 millones de dólares!', fa: 'در سال ۱۸۰۳، ناپلئون فرانسه آن را به ۱۵ میلیون دالر به ایالات متحده فروخت!' },
        { en: 'That was the [[louisiana purchase|Louisiana Purchase]]. In March, the American flag went up here.', es: 'Esa fue la [[louisiana purchase|Compra de Luisiana]]. En marzo, aquí izaron la bandera estadounidense.', fa: 'این [[louisiana purchase|خرید لوئیزیانا]] بود. در ماه مارچ، بیرق امریکا اینجا بالا رفت.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which country sold the Louisiana Territory to the United States?', es: '¿Qué país le vendió el territorio de Luisiana a Estados Unidos?', fa: 'کدام کشور سرزمین لوئیزیانا را به ایالات متحده فروخت؟' },
        choices: [
          { ok: true, t: { en: 'France', es: 'Francia', fa: 'فرانسه' },
            why: { en: 'Right! Napoleon of France sold it in 1803 for $15 million.', es: '¡Correcto! Napoleón de Francia la vendió en 1803 por 15 millones de dólares.', fa: 'درست! ناپلئون فرانسه آن را در سال ۱۸۰۳ به ۱۵ میلیون دالر فروخت.' } },
          { t: { en: 'Spain', es: 'España', fa: 'هسپانیه' },
            why: { en: 'Spain ruled here once. But in 1800 it gave Louisiana back to France.', es: 'España gobernó aquí antes. Pero en 1800 le devolvió Luisiana a Francia.', fa: 'هسپانیه یک وقت اینجا حکومت کرد. اما در سال ۱۸۰۰ لوئیزیانا را به فرانسه پس داد.' } },
          { t: { en: 'Britain', es: 'Gran Bretaña', fa: 'بریتانیه' },
            why: { en: 'Britain never owned Louisiana, so it could not sell it.', es: 'Gran Bretaña nunca fue dueña de Luisiana, así que no podía venderla.', fa: 'بریتانیه هرگز مالک لوئیزیانا نبود، پس نمی‌توانست آن را بفروشد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 4, text: { en: 'ST. LOUIS · 1804 · A river town near where the Missouri meets the Mississippi.', es: 'SAN LUIS · 1804 · Un pueblo de río cerca de donde el Misuri se une al Misisipi.', fa: 'سنت لوئیس · ۱۸۰۴ · شهری کنار دریا، نزدیک جایی که میزوری با می‌سی‌سی‌پی یکجا می‌شود.' } },
    { x: 18, y: 8, text: { en: 'THE LEVEE · Supplies for the Corps of Discovery [[expedition|expedition]] were bought in this town.', es: 'EL MUELLE · Las provisiones de la [[expedition|expedición]] del Cuerpo de Descubrimiento se compraron en este pueblo.', fa: 'کنار دریا · سامان [[expedition|سفر اکتشافی]] گروه کشف در همین شهر خریده شد.' } },
    { x: 23, y: 17, text: { en: 'LOOKING AHEAD · Sacagawea, a Lemhi Shoshone woman, will help Lewis and Clark as an [[interpreter|interpreter]].', es: 'MIRANDO ADELANTE · Sacagawea, una mujer lemhi shoshone, ayudará a Lewis y Clark como [[interpreter|intérprete]].', fa: 'نگاه به آینده · ساکاجاویا، یک زن شوشونی لمهی، به لوئیس و کلارک [[interpreter|ترجمان]] می‌شود.' } },
    { x: 14, y: 12, text: { en: 'LOOKING AHEAD · 1812 · War with Britain. Britain takes US sailors and backs Tecumseh\'s Native alliance.', es: 'MIRANDO ADELANTE · 1812 · Guerra con Gran Bretaña. Se lleva marineros de EE. UU. y apoya la alianza indígena de Tecumseh.', fa: 'نگاه به آینده · ۱۸۱۲ · جنگ با بریتانیه. ملاحان امریکا را می‌برد و از اتحاد بومی تکومسه پشتیبانی می‌کند.' } },
    { x: 14, y: 5, text: { en: 'LOOKING AHEAD · 1814 · The British burn Washington. At Fort McHenry the flag survives: the Star-Spangled Banner!', es: 'MIRANDO ADELANTE · 1814 · Los británicos queman Washington. En el fuerte McHenry la bandera resiste: ¡la bandera de estrellas!', fa: 'نگاه به آینده · ۱۸۱۴ · انگلیس‌ها واشنگتن را می‌سوزانند. در قلعهٔ مک‌هنری بیرق می‌ماند: بیرق ستاره‌نشان!' } }
  ],

  /* the quest: Jacques the boatman (gold !) on the levee -> Rosalie the cook at the market
     -> Baptiste at the fur post: bring him the good that comes from this land -> back to Jacques */
  quest: {
    stat: 'reg',
    title: { en: 'A Load for New Orleans', es: 'Una carga para Nueva Orleans', fa: 'باری برای نیواورلینز' },
    giver: {
      x: 22, y: 6,
      name: { en: 'Jacques', es: 'Jacques', fa: 'ژاک' },
      role: { en: 'Boatman', es: 'Barquero', fa: 'قایقران' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#c03a2a', pants: '#3a3a5a', hat: '#2a4a6a' },
      lines: [
        { en: 'Bonjour! Tomorrow my boat goes down the Mississippi to New Orleans.', es: '¡Bonjour! Mañana mi bote baja por el Misisipi hasta Nueva Orleans.', fa: 'بونژور! فردا قایقم از می‌سی‌سی‌پی پایین تا نیواورلینز می‌رود.' },
        { en: 'I need a good load from this land to sell there.', es: 'Necesito una buena carga de esta tierra para vender allá.', fa: 'یک بار خوب از همین سرزمین برای فروش در آنجا ضرورت دارم.' },
        { en: 'Rosalie the cook knows every trader. Find her at the market.', es: 'Rosalie, la cocinera, conoce a todos los comerciantes. Búscala en el mercado.', fa: 'روزالی آشپز همهٔ سوداگران را می‌شناسد. او را در بازار پیدا کن.' }
      ],
      wait: { en: 'Rosalie is at the market, in the south part of town.', es: 'Rosalie está en el mercado, en la parte sur del pueblo.', fa: 'روزالی در بازار است، در بخش جنوبی شهر.' },
      thanks: { en: 'Fine furs from St. Louis! They will sell well downriver. Merci!', es: '¡Buenas pieles de San Luis! Se venderán bien río abajo. ¡Merci!', fa: 'پوست‌های خوب سنت لوئیس! در پایین دریا خوب فروش می‌شوند. مرسی!' }
    },
    contact: {
      x: 18, y: 19,
      name: { en: 'Rosalie', es: 'Rosalie', fa: 'روزالی' },
      role: { en: 'Cook', es: 'Cocinera', fa: 'آشپز' },
      look: { skin: 5, hair: '#1a1008', shirt: '#e0c050', pants: '#5a3a5a', style: 'bun' },
      lines: [
        { en: 'I am a free woman. But many Black people here are [[enslaved|enslaved]].', es: 'Soy una mujer libre. Pero aquí muchas personas negras están [[enslaved|esclavizadas]].', fa: 'من یک زن آزاد هستم. اما بسیاری از سیاه‌پوستان اینجا [[enslaved|برده]] هستند.' },
        { en: 'Captain Clark takes York on his trip. York is enslaved. He had no choice.', es: 'El capitán Clark lleva a York en su viaje. York está esclavizado. No pudo elegir.', fa: 'کپتان کلارک یورک را با خود به سفر می‌برد. یورک برده است. اختیاری نداشت.' },
        { en: 'For your load, see Baptiste at the fur post, west of here.', es: 'Para tu carga, ve a ver a Baptiste en el puesto de pieles, al oeste.', fa: 'برای بارت، پیش باپتیست در دکان پوست، طرف غرب اینجا برو.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 8, y: 13,
        name: { en: 'Baptiste', es: 'Baptiste', fa: 'باپتیست' },
        role: { en: 'Fur merchant', es: 'Comerciante de pieles', fa: 'سوداگر پوست' },
        look: { skin: 1, hair: '#5a3a1a', shirt: '#3a5a3a', pants: '#2a2a2a', hat: '#3a2a1a' },
        lines: [
          { en: 'Welcome! St. Louis is the center of the [[fur trade|fur trade]].', es: '¡Bienvenido! San Luis es el centro del [[fur trade|comercio de pieles]].', fa: 'خوش آمدی! سنت لوئیس مرکز [[fur trade|تجارت پوست]] است.' }
        ]
      },
      q: { en: 'Which good comes from this land and sells well down the river? Bring it to me.', es: '¿Qué mercancía viene de esta tierra y se vende bien río abajo? Tráemela.', fa: 'کدام جنس از همین سرزمین است و در پایین دریا خوب فروش می‌شود؟ پیش من بیاور.' },
      choices: [
        { ok: true, at: [3, 15], icon: '🦫', t: { en: 'A bundle of furs', es: 'Un atado de pieles', fa: 'یک بسته پوست' },
          why: { en: 'Yes! Native hunters and French traders bring furs here. They sell in New Orleans and Europe.', es: '¡Sí! Cazadores indígenas y comerciantes franceses traen pieles aquí. Se venden en Nueva Orleans y Europa.', fa: 'بله! شکارچیان بومی و سوداگران فرانسوی پوست را اینجا می‌آورند. در نیواورلینز و اروپا فروش می‌شود.' } },
        { at: [26, 16], icon: '🍵', t: { en: 'A crate of tea', es: 'Una caja de té', fa: 'یک صندوق چای' },
          why: { en: 'Tea comes from China, across the ocean. It does not grow here.', es: 'El té viene de China, al otro lado del océano. No crece aquí.', fa: 'چای از چین، آن طرف بحر، می‌آید. اینجا نمی‌روید.' } },
        { at: [23, 4], icon: '🍬', t: { en: 'A barrel of sugar', es: 'Un barril de azúcar', fa: 'یک بشکه شکر' },
          why: { en: 'Sugarcane grows in the south, near New Orleans. People there have plenty.', es: 'La caña de azúcar crece en el sur, cerca de Nueva Orleans. Allá tienen mucha.', fa: 'نیشکر در جنوب، نزدیک نیواورلینز، می‌روید. مردم آنجا زیاد دارند.' } }
      ],
      item: { icon: '🦫', name: { en: 'A bundle of furs', es: 'Un atado de pieles', fa: 'یک بسته پوست' } }
    }
  },

  scraps: [[1, 20], [19, 4], [23, 20]],
  smudges: [[10, 8], [17, 9]],

  challenge: {
    at: [21, 17],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // the river lever where the rivers meet, the port lever at the end of the north dock, the seller lever by the government house
    spots: [[23, 3], [26, 6], [19, 12]],
    stat: 'reg',
    title: { en: 'Open the River Trade', es: 'Abre el comercio del río', fa: 'تجارت دریا را باز کن' },
    intro: { en: 'Western farmers must ship crops to the sea. Set the river, the port and the seller.',
      es: 'Los agricultores del oeste deben llevar sus cosechas al mar. Ajusta el río, el puerto y el vendedor.',
      fa: 'دهقانان غرب باید حاصلات را به بحر برسانند. دریا، بندر و فروشنده را تنظیم کن.' },
    switches: [
      { name: { en: 'River to the sea', es: 'Río hacia el mar', fa: 'دریا تا بحر' }, icon: '🌊', start: 1,
        states: [{ en: 'Mississippi', es: 'Misisipi', fa: 'می‌سی‌سی‌پی' }, { en: 'Ohio', es: 'Ohio', fa: 'اوهایو' }] },
      { name: { en: 'Port', es: 'Puerto', fa: 'بندر' }, icon: '⚓', start: 1,
        states: [{ en: 'New Orleans', es: 'Nueva Orleans', fa: 'نیواورلینز' }, { en: 'Boston', es: 'Boston', fa: 'بوستن' }] },
      { name: { en: 'Who sold the land', es: 'Quién vendió la tierra', fa: 'کی زمین را فروخت' }, icon: '📜', start: 2,
        states: [{ en: 'France', es: 'Francia', fa: 'فرانسه' }, { en: 'Spain', es: 'España', fa: 'هسپانیه' }, { en: 'Britain', es: 'Gran Bretaña', fa: 'بریتانیه' }] }
    ],
    results: {
      '0,0,0': { ok: true, t: { en: 'The Mississippi, New Orleans and France! Now the whole river belongs to the US.', es: '¡El Misisipi, Nueva Orleans y Francia! Ahora todo el río es de EE. UU.', fa: 'می‌سی‌سی‌پی، نیواورلینز و فرانسه! حالا تمام دریا از امریکا است.' },
        show: [{ t: { en: 'River open', es: 'Río abierto', fa: 'دریا باز' }, ok: true, icon: '🌊' }, { t: { en: 'Port open', es: 'Puerto abierto', fa: 'بندر باز' }, ok: true, icon: '⚓' }, { t: { en: 'Land bought', es: 'Tierra comprada', fa: 'زمین خریده شد' }, ok: true, icon: '📜' }] },
      '0,0,1': { ok: false, t: { en: 'Spain gave Louisiana back to France in 1800. Spain could not sell it in 1803.', es: 'España le devolvió Luisiana a Francia en 1800. No podía venderla en 1803.', fa: 'هسپانیه در ۱۸۰۰ لوئیزیانا را به فرانسه پس داد. در ۱۸۰۳ نمی‌توانست آن را بفروشد.' },
        show: [{ t: { en: 'River open', es: 'Río abierto', fa: 'دریا باز' }, ok: true, icon: '🌊' }, { t: { en: 'Port open', es: 'Puerto abierto', fa: 'بندر باز' }, ok: true, icon: '⚓' }, { t: { en: 'Wrong seller', es: 'Vendedor equivocado', fa: 'فروشندهٔ غلط' }, ok: false, icon: '📜' }] },
      '0,0,2': { ok: false, t: { en: 'Britain never owned Louisiana. It had nothing to sell.', es: 'Gran Bretaña nunca fue dueña de Luisiana. No tenía nada que vender.', fa: 'بریتانیه هرگز مالک لوئیزیانا نبود. چیزی برای فروش نداشت.' },
        show: [{ t: { en: 'River open', es: 'Río abierto', fa: 'دریا باز' }, ok: true, icon: '🌊' }, { t: { en: 'Port open', es: 'Puerto abierto', fa: 'بندر باز' }, ok: true, icon: '⚓' }, { t: { en: 'Wrong seller', es: 'Vendedor equivocado', fa: 'فروشندهٔ غلط' }, ok: false, icon: '📜' }] },
      '1,0,0': { ok: false, t: { en: 'The Ohio flows into the Mississippi. Boats still need the Mississippi to reach the sea.', es: 'El Ohio desemboca en el Misisipi. Los botes igual necesitan el Misisipi para llegar al mar.', fa: 'اوهایو به می‌سی‌سی‌پی می‌ریزد. قایق‌ها باز هم برای رسیدن به بحر به می‌سی‌سی‌پی ضرورت دارند.' },
        show: [{ t: { en: 'Wrong river', es: 'Río equivocado', fa: 'دریای غلط' }, ok: false, icon: '🌊' }, { t: { en: 'Port open', es: 'Puerto abierto', fa: 'بندر باز' }, ok: true, icon: '⚓' }, { t: { en: 'Land bought', es: 'Tierra comprada', fa: 'زمین خریده شد' }, ok: true, icon: '📜' }] },
      '0,1,0': { ok: false, t: { en: 'Boston is on the Atlantic coast, far from the Mississippi. River boats cannot reach it.', es: 'Boston está en la costa del Atlántico, lejos del Misisipi. Los botes del río no llegan allí.', fa: 'بوستن در ساحل بحر اطلس است، دور از می‌سی‌سی‌پی. قایق‌های دریا به آنجا نمی‌رسند.' },
        show: [{ t: { en: 'River open', es: 'Río abierto', fa: 'دریا باز' }, ok: true, icon: '🌊' }, { t: { en: 'Wrong port', es: 'Puerto equivocado', fa: 'بندر غلط' }, ok: false, icon: '⚓' }, { t: { en: 'Land bought', es: 'Tierra comprada', fa: 'زمین خریده شد' }, ok: true, icon: '📜' }] }
    },
    otherwise: { ok: false, t: { en: 'The river trade is still stuck. More than one lever is wrong. Try again.', es: 'El comercio del río sigue trabado. Hay más de una palanca mal. Prueba otra vez.', fa: 'تجارت دریا هنوز گیر است. بیشتر از یک دسته غلط است. دوباره کوشش کن.' },
      show: [{ t: { en: 'Boats stuck', es: 'Botes trabados', fa: 'قایق‌ها گیر ماندند' }, ok: false, icon: '⛔' }] },
    success: { en: 'The river is open! Farmers can ship crops down the Mississippi to New Orleans.', es: '¡El río está abierto! Los agricultores pueden mandar cosechas por el Misisipi a Nueva Orleans.', fa: 'دریا باز است! دهقانان می‌توانند حاصلات را از می‌سی‌سی‌پی به نیواورلینز بفرستند.' }
  },

  boss: {
    at: [13, 18],
    stat: 'loc',
    need: 3,
    name: { en: 'The Muddy River Grump', es: 'El Gruñón del Río Lodoso', fa: 'غرغروی دریای گل‌آلود' },
    appear: { en: 'The Muddy River Grump is hiding in the fog by the old stone tower!', es: '¡El Gruñón del Río Lodoso se esconde en la niebla junto a la vieja torre de piedra!', fa: 'غرغروی دریای گل‌آلود در مه کنار برج کهنهٔ سنگی پنهان است!' },
    taunt: { en: 'Rivers, ports, treaties... boring! I muddied the whole map, and you cannot clean it!', es: 'Ríos, puertos, tratados... ¡qué aburrido! Ensucié todo el mapa, ¡y no puedes limpiarlo!', fa: 'دریا، بندر، معاهده... چه خسته‌کن! تمام نقشه را گل‌آلود کردم، و تو نمی‌توانی پاکش کنی!' },
    win: { en: 'The mud washes away down the river. Journal page 4.1 floats down into your hands!', es: 'El lodo se va río abajo. ¡La página 4.1 del diario cae en tus manos!', fa: 'گل با دریا پایین می‌رود. صفحهٔ ۴.۱ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'How did Jefferson and Hamilton see America differently?', es: '¿En qué se diferenciaban las ideas de Jefferson y Hamilton sobre Estados Unidos?', fa: 'جفرسن و همیلتن امریکا را چطور متفاوت می‌دیدند؟' },
        choices: [
          { en: 'Jefferson: small farms. Hamilton: trade, cities, banks', es: 'Jefferson: granjas pequeñas. Hamilton: comercio, ciudades, bancos', fa: 'جفرسن: فارم‌های کوچک. همیلتن: تجارت، شهر، بانک' },
          { en: 'Jefferson: big banks. Hamilton: only small farms', es: 'Jefferson: bancos grandes. Hamilton: solo granjas pequeñas', fa: 'جفرسن: بانک‌های بزرگ. همیلتن: فقط فارم‌های کوچک' },
          { en: 'Jefferson: a new king. Hamilton: no government', es: 'Jefferson: un rey nuevo. Hamilton: ningún gobierno', fa: 'جفرسن: یک پادشاه نو. همیلتن: هیچ حکومت' },
          { en: 'Both wanted to go back under British rule', es: 'Los dos querían volver al dominio británico', fa: 'هر دو می‌خواستند دوباره زیر حکومت انگلیس بروند' }],
        answer: 0,
        why: { en: 'Jefferson trusted small farmers. Hamilton wanted trade, cities and a national bank.', es: 'Jefferson confiaba en los pequeños agricultores. Hamilton quería comercio, ciudades y un banco nacional.', fa: 'جفرسن به دهقانان کوچک اعتماد داشت. همیلتن تجارت، شهرها و یک بانک ملی می‌خواست.' } },
      { q: { en: 'Who sold the Louisiana Territory to the United States in 1803?', es: '¿Quién le vendió el territorio de Luisiana a Estados Unidos en 1803?', fa: 'در سال ۱۸۰۳ چه کسی سرزمین لوئیزیانا را به ایالات متحده فروخت؟' },
        choices: [
          { en: 'France', es: 'Francia', fa: 'فرانسه' },
          { en: 'Spain', es: 'España', fa: 'هسپانیه' },
          { en: 'Britain', es: 'Gran Bretaña', fa: 'بریتانیه' },
          { en: 'Mexico', es: 'México', fa: 'مکسیکو' }],
        answer: 0,
        why: { en: 'Napoleon of France sold it for $15 million. It about doubled the size of the US.', es: 'Napoleón de Francia la vendió por 15 millones de dólares. Casi duplicó el tamaño de EE. UU.', fa: 'ناپلئون فرانسه آن را به ۱۵ میلیون دالر فروخت. اندازهٔ امریکا تقریباً دو برابر شد.' } },
      { q: { en: 'Why did western farmers care so much about New Orleans?', es: '¿Por qué a los agricultores del oeste les importaba tanto Nueva Orleans?', fa: 'چرا نیواورلینز برای دهقانان غرب این‌قدر مهم بود؟' },
        choices: [
          { en: 'Their crops went down the river to its port', es: 'Sus cosechas bajaban por el río a su puerto', fa: 'حاصلات‌شان از راه دریا به بندر آن می‌رفت' },
          { en: 'It was the only town where wheat would grow', es: 'Era el único pueblo donde crecía el trigo', fa: 'تنها شهری بود که در آن گندم می‌رویید' },
          { en: 'The US capital was there in those years', es: 'La capital de EE. UU. estaba allí en esos años', fa: 'پایتخت امریکا در آن سال‌ها آنجا بود' },
          { en: 'Its mountains had gold for every farmer', es: 'Sus montañas tenían oro para cada agricultor', fa: 'کوه‌هایش برای هر دهقان طلا داشت' }],
        answer: 0,
        why: { en: 'The Mississippi carried western crops to New Orleans. Whoever held that port could open or close trade.', es: 'El Misisipi llevaba las cosechas del oeste a Nueva Orleans. Quien tenía ese puerto podía abrir o cerrar el comercio.', fa: 'می‌سی‌سی‌پی حاصلات غرب را به نیواورلینز می‌برد. هر کس آن بندر را داشت، می‌توانست تجارت را باز یا بسته کند.' } },
      { q: { en: 'Who was Sacagawea?', es: '¿Quién fue Sacagawea?', fa: 'ساکاجاویا کی بود؟' },
        choices: [
          { en: 'A Lemhi Shoshone woman who helped as an interpreter', es: 'Una mujer lemhi shoshone que ayudó como intérprete', fa: 'یک زن شوشونی لمهی که ترجمانی کرد' },
          { en: 'A French ship captain who sold Louisiana to Spain', es: 'Una capitana francesa que le vendió Luisiana a España', fa: 'یک کپتان فرانسوی که لوئیزیانا را به هسپانیه فروخت' },
          { en: 'A British spy who burned the city of Washington', es: 'Una espía británica que quemó la ciudad de Washington', fa: 'یک جاسوس انگلیسی که شهر واشنگتن را سوزاند' },
          { en: 'A Kentucky farmer who started the town of St. Louis', es: 'Una agricultora de Kentucky que fundó San Luis', fa: 'یک دهقان کنتاکی که شهر سنت لوئیس را ساخت' }],
        answer: 0,
        why: { en: 'Sacagawea, a Lemhi Shoshone woman, helped Lewis and Clark talk with Native nations along the way.', es: 'Sacagawea, una mujer lemhi shoshone, ayudó a Lewis y Clark a hablar con naciones indígenas en el camino.', fa: 'ساکاجاویا، یک زن شوشونی لمهی، به لوئیس و کلارک کمک کرد با ملت‌های بومی در راه گپ بزنند.' } },
      { q: { en: 'Which was one cause of the War of 1812?', es: '¿Cuál fue una causa de la guerra de 1812?', fa: 'یکی از علت‌های جنگ ۱۸۱۲ کدام بود؟' },
        choices: [
          { en: 'British ships forced US sailors to serve them', es: 'Barcos británicos obligaban a marineros de EE. UU. a servirles', fa: 'کشتی‌های انگلیسی ملاحان امریکا را به زور به خدمت می‌گرفتند' },
          { en: 'Britain wanted to buy Louisiana from France', es: 'Gran Bretaña quería comprarle Luisiana a Francia', fa: 'بریتانیه می‌خواست لوئیزیانا را از فرانسه بخرد' },
          { en: 'Spain closed the port of Boston to all farmers', es: 'España cerró el puerto de Boston a todos los agricultores', fa: 'هسپانیه بندر بوستن را به روی همهٔ دهقانان بست' },
          { en: 'France burned the city of Washington, D.C.', es: 'Francia quemó la ciudad de Washington D. C.', fa: 'فرانسه شهر واشنگتن دی‌سی را سوزاند' }],
        answer: 0,
        why: { en: 'Britain took US sailors by force, called [[impressment|impressment]]. It also limited US trade and backed Native resistance.', es: 'Gran Bretaña se llevaba marineros a la fuerza: la [[impressment|leva forzosa]]. También limitó el comercio y apoyó la resistencia indígena.', fa: 'بریتانیه ملاحان امریکا را به زور می‌برد: [[impressment|جلب اجباری]]. تجارت را هم محدود کرد و از مقاومت بومی پشتیبانی کرد.' } },
      { q: { en: 'What did British soldiers do in Washington, D.C., in 1814?', es: '¿Qué hicieron los soldados británicos en Washington D. C. en 1814?', fa: 'عسکرهای انگلیسی در سال ۱۸۱۴ در واشنگتن دی‌سی چه کردند؟' },
        choices: [
          { en: 'They burned the White House and Capitol', es: 'Quemaron la Casa Blanca y el Capitolio', fa: 'قصر سفید و کانگرس را آتش زدند' },
          { en: 'They signed the Louisiana Purchase there', es: 'Firmaron allí la Compra de Luisiana', fa: 'آنجا خرید لوئیزیانا را امضا کردند' },
          { en: 'They built the first national bank there', es: 'Construyeron allí el primer banco nacional', fa: 'آنجا اولین بانک ملی را ساختند' },
          { en: 'They gave the whole city back to Spain', es: 'Le devolvieron toda la ciudad a España', fa: 'تمام شهر را به هسپانیه پس دادند' }],
        answer: 0,
        why: { en: 'In August 1814, British soldiers burned the White House and the Capitol.', es: 'En agosto de 1814, soldados británicos quemaron la Casa Blanca y el Capitolio.', fa: 'در اگست ۱۸۱۴، عسکرهای انگلیسی قصر سفید و ساختمان کانگرس را آتش زدند.' } },
      { q: { en: 'Why is Fort McHenry famous?', es: '¿Por qué es famoso el fuerte McHenry?', fa: 'چرا قلعهٔ مک‌هنری مشهور است؟' },
        choices: [
          { en: 'Its flag inspired "The Star-Spangled Banner"', es: 'Su bandera inspiró "The Star-Spangled Banner"', fa: 'بیرقش الهام‌بخش سرود «بیرق ستاره‌نشان» شد' },
          { en: 'Lewis and Clark started their long trip there', es: 'Lewis y Clark empezaron allí su largo viaje', fa: 'لوئیس و کلارک سفر دراز خود را آنجا شروع کردند' },
          { en: 'The Louisiana Purchase was signed there', es: 'Allí se firmó la Compra de Luisiana', fa: 'خرید لوئیزیانا آنجا امضا شد' },
          { en: 'The British burned it to the ground', es: 'Los británicos lo quemaron por completo', fa: 'انگلیس‌ها آن را کاملاً سوزاندند' }],
        answer: 0,
        why: { en: 'In 1814 the fort held out. Francis Scott Key saw its flag and wrote a poem. It became our anthem.', es: 'En 1814 el fuerte resistió. Francis Scott Key vio su bandera y escribió un poema. Se volvió el himno.', fa: 'در ۱۸۱۴ قلعه ایستادگی کرد. فرانسیس اسکات کی بیرقش را دید و شعری نوشت. سرود ملی شد.' } },
      { q: { en: 'What was one result of the War of 1812?', es: '¿Cuál fue un resultado de la guerra de 1812?', fa: 'یکی از نتیجه‌های جنگ ۱۸۱۲ چه بود؟' },
        choices: [
          { en: 'Americans felt a new national pride', es: 'Los estadounidenses sintieron un nuevo orgullo nacional', fa: 'امریکایی‌ها افتخار ملی تازه‌ای حس کردند' },
          { en: 'The US gave Louisiana back to France', es: 'EE. UU. le devolvió Luisiana a Francia', fa: 'امریکا لوئیزیانا را به فرانسه پس داد' },
          { en: 'Britain took over the city of Boston', es: 'Gran Bretaña se quedó con la ciudad de Boston', fa: 'بریتانیه شهر بوستن را گرفت' },
          { en: 'The US got a king from Britain', es: 'EE. UU. recibió un rey de Gran Bretaña', fa: 'امریکا از بریتانیه یک پادشاه گرفت' }],
        answer: 0,
        why: { en: 'The young nation stood up to Britain. British-backed Native resistance in the Northwest also ended.', es: 'La joven nación le hizo frente a Gran Bretaña. También terminó la resistencia indígena apoyada por los británicos en el noroeste.', fa: 'ملت جوان در برابر بریتانیه ایستاد. مقاومت بومی با پشتیبانی انگلیس در شمال غرب هم پایان یافت.' } }
    ]
  },

  learned: [
    { en: 'Jefferson wanted a nation of small farmers. Hamilton wanted trade, cities and banks.', es: 'Jefferson quería una nación de pequeños agricultores. Hamilton quería comercio, ciudades y bancos.', fa: 'جفرسن ملتی از دهقانان کوچک می‌خواست. همیلتن تجارت، شهرها و بانک‌ها می‌خواست.' },
    { en: 'The [[louisiana purchase|Louisiana Purchase]] (1803) doubled the US. Lewis and Clark, York and Sacagawea explored it.', es: 'La [[louisiana purchase|Compra de Luisiana]] (1803) duplicó EE. UU. Lewis y Clark, York y Sacagawea la exploraron.', fa: '[[louisiana purchase|خرید لوئیزیانا]] (۱۸۰۳) امریکا را دو برابر ساخت. لوئیس و کلارک، یورک و ساکاجاویا آن را کشف کردند.' },
    { en: 'In the War of 1812, the US fought Britain. Afterward, Americans felt new national pride.', es: 'En la guerra de 1812, EE. UU. luchó contra Gran Bretaña. Después, los estadounidenses sintieron un nuevo orgullo nacional.', fa: 'در جنگ ۱۸۱۲، امریکا با بریتانیه جنگید. بعد از آن، امریکایی‌ها افتخار ملی تازه‌ای حس کردند.' }
  ],
  reflect: {
    q: { en: 'Jefferson and Hamilton had different dreams for the country. What is your dream for your town?', es: 'Jefferson y Hamilton tenían sueños distintos para el país. ¿Cuál es tu sueño para tu ciudad?', fa: 'جفرسن و همیلتن برای کشور آرزوهای مختلف داشتند. آرزوی تو برای شهرت چیست؟' },
    starter: { en: 'My dream for my town is', es: 'Mi sueño para mi ciudad es', fa: 'آرزوی من برای شهرم این است که' }
  }
};
