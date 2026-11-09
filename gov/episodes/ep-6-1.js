/* CIVICWALKER · Episode 6.1 · The President's Many Jobs (Executive Powers)
   Washington, DC, the White House grounds today, as visitors see them. North is up.
   North (y 1-4): Lafayette Square, a park with paths and a statue; Blair House, the President's guest house, in the
   north-west corner. y 5-6: Pennsylvania Avenue, closed to cars, in front of the North Lawn fence.
   Middle (y 7-15): the White House behind its fence (F), with the North Lawn and the South Lawn (no visitors inside).
   West of it, the Eisenhower Executive Office Building (EEOB, door); east of it, the Treasury Building.
   y 16: E Street. South (y 17-20): the Ellipse, an oval path in a big lawn, with a memorial to US soldiers on the
   west side; the White House Visitor Center in the south-east.
   The charter stone asks the student to carry each task card to the President's role that does it:
   Chief Diplomat by Blair House, Head of State at the North Lawn fence, Chief Legislator at the east end of
   Pennsylvania Avenue (the road to the Capitol), Chief Executive by the EEOB, Commander in Chief by the memorial. */
window.EPISODE = {
  id: '6.1',
  realm: 6,
  sol: 'GOVT',
  title: { en: 'The President\'s Many Jobs', es: 'Los muchos trabajos del presidente', fa: 'کارهای زیاد رئیس جمهور' },
  weather: { sky: 'clear', time: 'sunset' },
  place: { en: 'The White House, today', es: 'La Casa Blanca, hoy', fa: 'قصر سفید، امروز' },
  intro: [
    { en: 'The Grump tore the page about the President\'s jobs. Now they are all mixed up!',
      es: 'El Gruñón rompió la página sobre los trabajos del presidente. ¡Ahora están todos mezclados!',
      fa: 'غرغرو صفحهٔ کارهای رئیس جمهور را پاره کرد. حالا همهٔ کارها درهم و برهم شده‌اند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes: Washington, DC on the world map (no timeline in this game) */
  scenes: {
    at: [-77.04, 38.90],
    start: [
      { en: 'Washington, DC is the capital of the United States.',
        es: 'Washington, DC es la capital de Estados Unidos.',
        fa: 'واشنگتن دی سی پایتخت ایالات متحده است.' },
      { en: 'The President lives and works in the White House.',
        es: 'El presidente vive y trabaja en la Casa Blanca.',
        fa: 'رئیس جمهور در قصر سفید زندگی و کار می‌کند.' },
      { en: 'John Adams was the first President to live here, in 1800.',
        es: 'John Adams fue el primer presidente que vivió aquí, en 1800.',
        fa: 'جان آدامز اولین رئیس جمهوری بود که در سال ۱۸۰۰ اینجا زندگی کرد.' }
    ],
    page: { en: 'Article II of the Constitution sets up the executive branch, led by the President.',
      es: 'El Artículo II de la Constitución crea el poder ejecutivo, dirigido por el presidente.',
      fa: 'مادهٔ دوم قانون اساسی قوهٔ اجرائیه را می‌سازد، که رئیس جمهور رهبر آن است.' },
    guess: {
      q: { en: 'Who do you think leads the US armed forces?', es: '¿Quién crees que dirige las fuerzas armadas de EE. UU.?', fa: 'فکر می‌کنی کی رهبر قوای مسلح امریکا است؟' },
      choices: [
        { t: { en: '🏠 The President', es: '🏠 El presidente', fa: '🏠 رئیس جمهور' }, ok: true },
        { t: { en: '🏛️ Congress', es: '🏛️ El Congreso', fa: '🏛️ کانگرس' } }
      ],
      why: { en: 'The President is Commander in Chief of the armed forces. But only Congress can declare war.', es: 'El presidente es Comandante en Jefe de las fuerzas armadas. Pero solo el Congreso declara la guerra.', fa: 'رئیس جمهور سرقوماندان قوای مسلح است. اما فقط کانگرس می‌تواند اعلان جنگ کند.' }
    },
    next: {
      q: { en: 'Next: if a President dies or resigns, who takes over?', es: 'Ahora: si un presidente muere o renuncia, ¿quién toma su lugar?', fa: 'بعدی: اگر رئیس جمهور بمیرد یا استعفا بدهد، کی جایش را می‌گیرد؟' },
      choices: [
        { t: { en: 'The Vice President', es: 'El vicepresidente', fa: 'معاون رئیس جمهور' }, ok: true },
        { t: { en: 'The Chief Justice', es: 'El presidente de la Corte Suprema', fa: 'رئیس ستره محکمه' } }
      ],
      why: { en: 'The Vice President becomes President. The 25th Amendment says so clearly.', es: 'El vicepresidente se vuelve presidente. La Enmienda 25 lo dice claramente.', fa: 'معاون رئیس جمهور، رئیس جمهور می‌شود. متمم بیست و پنجم این را واضح می‌گوید.' }
    }
  },
  /* houses: who works behind each door; walk in and talk */
  houses: [
    { at: [2, 2], name: { en: 'Mr. Hale', es: 'Sr. Hale', fa: 'آقای هیل' },
      look: { skin: 0, hair: '#8a8a8a', shirt: '#2f4f7a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to Blair House, the President\'s guest house.', es: 'Bienvenido a la Casa Blair, la casa de huéspedes del presidente.', fa: 'به خانهٔ بلیر، مهمان‌خانهٔ رئیس جمهور، خوش آمدی.' },
        { en: 'Leaders from other countries often stay here on a visit.', es: 'Líderes de otros países muchas veces se quedan aquí de visita.', fa: 'رهبران کشورهای دیگر اکثراً در سفر خود اینجا می‌مانند.' },
        { en: 'The President picks [[ambassador|ambassadors]] to other lands. The Senate must approve them.', es: 'El presidente elige [[ambassador|embajadores]] para otros países. El Senado debe aprobarlos.', fa: 'رئیس جمهور [[ambassador|سفیرها]] را برای کشورهای دیگر انتخاب می‌کند. سنا باید آنها را تأیید کند.' }
      ] },
    { at: [4, 12], name: { en: 'Ms. Grant', es: 'Sra. Grant', fa: 'خانم گرانت' },
      look: { skin: 4, hair: '#120c08', shirt: '#7a2a4a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Many people who help the President work in this big building.', es: 'Mucha gente que ayuda al presidente trabaja en este gran edificio.', fa: 'بسیاری از کسانی که به رئیس جمهور کمک می‌کنند در این ساختمان بزرگ کار می‌کنند.' },
        { en: 'As [[chief executive|Chief Executive]], the President makes sure laws are carried out.', es: 'Como [[chief executive|Jefe del Ejecutivo]], el presidente se asegura de que se cumplan las leyes.', fa: 'به حیث [[chief executive|رئیس اجرائیه]]، رئیس جمهور مطمئن می‌شود که قانون‌ها اجرا شوند.' },
        { en: 'The [[cabinet|Cabinet]] are heads of departments. The Senate confirms them.', es: 'El [[cabinet|Gabinete]] son los jefes de los departamentos. El Senado los confirma.', fa: '[[cabinet|کابینه]] رئیسان وزارت‌ها هستند. سنا آنها را تأیید می‌کند.' }
      ] },
    { at: [27, 18], name: { en: 'Mr. Lopez', es: 'Sr. López', fa: 'آقای لوپز' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#3a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'This is the White House Visitor Center. Our museum is free!', es: 'Este es el Centro de Visitantes de la Casa Blanca. ¡El museo es gratis!', fa: 'این مرکز بازدیدکنندگان قصر سفید است. موزیم ما رایگان است!' },
        { en: 'George Washington chose this spot, but he never lived in the White House.', es: 'George Washington eligió este lugar, pero nunca vivió en la Casa Blanca.', fa: 'جورج واشنگتن این جا را انتخاب کرد، اما هیچ وقت در قصر سفید زندگی نکرد.' },
        { en: 'As [[head of state|Head of State]], the President gives medals to heroes.', es: 'Como [[head of state|Jefe de Estado]], el presidente da medallas a los héroes.', fa: 'به حیث [[head of state|رئیس دولت]]، رئیس جمهور به قهرمانان مدال می‌دهد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 1-4): Lafayette Square (grass, trees T, paths :, a statue r); Blair House (R over h) in the north-west.
     y 5-6: Pennsylvania Avenue (l), a walking street in front of the North Lawn fence.
     Middle (y 7-15): the White House (D) behind its fence (F), the North Lawn and South Lawn with fountains (O).
     Walks (l) on both sides: the EEOB (J, door) to the west and the Treasury Building (J) to the east.
     y 16: E Street (l). South (y 17-20): the Ellipse (an oval path :), the soldiers' memorial sign on its west side,
     the Visitor Center (Q over h, door) in the south-east. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'TRRR..T...T.....:...T.....T....T',
    'Thdh............:..............T',
    'T.......::::::::r::::::::::::::T',
    'T...........T.x.:.....T.....T..T',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T....x.lFFFFFFFFFFFFFFFFl....x.T',
    'TJJJJJJlF......O.......FlJJJJJJT',
    'TJJJJJJlF...DDDDDDDD...FlJJJJJJT',
    'TJJJJJJlF...DDDDDDDD...FlJJJJJJT',
    'TJJJJJJlF...DDDDDDDD...FlJJJJJJT',
    'ThhhdhhlF..............FlhhhhhhT',
    'T......lF......O.......Fl......T',
    'T......lF..............Fl......T',
    'T......lFFFFFFFFFFFFFFFFl......T',
    'TllllllllllllllllllllllllllllllT',
    'TT..:::::::::::::::::.x.lQQQQQQT',
    'T..:x.......T........:..lhhdhhhT',
    'T..:.................:..l......T',
    'T...:::::::::::::::::..Tl......T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [14, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [11, 2], at: [11, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 2 steps south, toward Pennsylvania Avenue.', es: 'Desde esta nota, camina 2 pasos al sur, hacia la avenida Pensilvania.', fa: 'از این یادداشت، ۲ قدم به جنوب برو، طرف سرک پنسلوانیا.' },
      text: { en: 'An old coin! The White House was built from 1792 to 1800.', es: '¡Una moneda vieja! La Casa Blanca se construyó de 1792 a 1800.', fa: 'یک سکهٔ کهنه! قصر سفید از سال ۱۷۹۲ تا ۱۸۰۰ ساخته شد.' } },
    { clueAt: [28, 13], at: [28, 15], decor: 'flower',
      clue: { en: 'From this note, walk 2 steps south, toward E Street.', es: 'Desde esta nota, camina 2 pasos al sur, hacia la calle E.', fa: 'از این یادداشت، ۲ قدم به جنوب برو، طرف سرک ای.' },
      text: { en: 'A rose! The White House has a famous Rose Garden by the President\'s office.', es: '¡Una rosa! La Casa Blanca tiene un famoso Jardín de Rosas junto a la oficina del presidente.', fa: 'یک گل گلاب! قصر سفید یک باغ گلاب مشهور کنار دفتر رئیس جمهور دارد.' } }
  ],

  words: {
    'executive branch': { en: 'the part of government that carries out the laws', es: 'la parte del gobierno que hace cumplir las leyes', fa: 'بخشی از حکومت که قانون‌ها را اجرا می‌کند' },
    'article ii': { en: 'the part of the Constitution about the President', es: 'la parte de la Constitución sobre el presidente', fa: 'بخشی از قانون اساسی دربارهٔ رئیس جمهور' },
    'natural-born citizen': { en: 'a person who was a US citizen from birth', es: 'una persona que es ciudadana de EE. UU. desde que nació', fa: 'کسی که از روز تولد شهروند امریکا بوده است' },
    term: { en: 'the time a leader serves before the next election', es: 'el tiempo que sirve un líder antes de la próxima elección', fa: 'مدتی که یک رهبر تا انتخابات بعدی کار می‌کند' },
    'commander in chief': { en: 'the President\'s job as leader of the armed forces', es: 'el trabajo del presidente como líder de las fuerzas armadas', fa: 'کار رئیس جمهور به حیث رهبر قوای مسلح' },
    'chief diplomat': { en: 'the President\'s job of working with other countries', es: 'el trabajo del presidente de tratar con otros países', fa: 'کار رئیس جمهور برای کار کردن با کشورهای دیگر' },
    'head of state': { en: 'the President\'s job as the symbol of the nation', es: 'el trabajo del presidente como símbolo de la nación', fa: 'کار رئیس جمهور به حیث نشانهٔ ملت' },
    'chief executive': { en: 'the President\'s job of leading the executive branch', es: 'el trabajo del presidente de dirigir el poder ejecutivo', fa: 'کار رئیس جمهور برای رهبری قوهٔ اجرائیه' },
    'chief legislator': { en: 'the President\'s job of working with Congress on laws', es: 'el trabajo del presidente de trabajar con el Congreso en las leyes', fa: 'کار رئیس جمهور برای کار با کانگرس روی قانون‌ها' },
    cabinet: { en: 'the heads of the executive departments, who advise the President', es: 'los jefes de los departamentos ejecutivos, que aconsejan al presidente', fa: 'رئیسان وزارت‌های اجرائیه، که به رئیس جمهور مشوره می‌دهند' },
    treaty: { en: 'a written deal between two or more countries', es: 'un acuerdo escrito entre dos o más países', fa: 'یک توافق نوشته‌شده میان دو یا چند کشور' },
    ambassador: { en: 'a person sent to speak for the country in another land', es: 'una persona enviada a hablar por el país en otra tierra', fa: 'کسی که فرستاده می‌شود تا در کشور دیگر از طرف کشورش گپ بزند' },
    veto: { en: 'when the President says no and does not sign a bill', es: 'cuando el presidente dice que no y no firma un proyecto', fa: 'وقتی رئیس جمهور «نه» می‌گوید و لایحه را امضا نمی‌کند' },
    'state of the union': { en: 'a speech the President gives to Congress about the nation', es: 'un discurso del presidente al Congreso sobre la nación', fa: 'سخنرانی رئیس جمهور برای کانگرس دربارهٔ حال کشور' }
  },

  npcs: [
    {
      x: 11, y: 6,
      name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      role: { en: 'Tour guide', es: 'Guía turística', fa: 'رهنمای سیاحان' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#c0392b', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Welcome to the White House! The President lives and works here.', es: '¡Bienvenido a la Casa Blanca! El presidente vive y trabaja aquí.', fa: 'به قصر سفید خوش آمدی! رئیس جمهور اینجا زندگی و کار می‌کند.' },
        { en: '[[article ii|Article II]] of the Constitution sets up the [[executive branch|executive branch]].', es: 'El [[article ii|Artículo II]] de la Constitución crea el [[executive branch|poder ejecutivo]].', fa: '[[article ii|مادهٔ دوم]] قانون اساسی [[executive branch|قوهٔ اجرائیه]] را می‌سازد.' },
        { en: 'A President must be a [[natural-born citizen|natural-born citizen]] and at least 35.', es: 'Un presidente debe ser [[natural-born citizen|ciudadano de nacimiento]] y tener al menos 35 años.', fa: 'رئیس جمهور باید [[natural-born citizen|شهروند از تولد]] باشد و دست کم ۳۵ سال داشته باشد.' },
        { en: 'He or she must live in the US 14 years. A [[term|term]] is 4 years.', es: 'Debe vivir en EE. UU. 14 años. Un [[term|período]] dura 4 años.', fa: 'او باید ۱۴ سال در امریکا زندگی کرده باشد. یک [[term|دوره]] ۴ سال است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which is a rule to become President of the United States?', es: '¿Cuál es una regla para ser presidente de Estados Unidos?', fa: 'کدام یکی قانونی برای رئیس جمهور شدن امریکا است؟' },
        choices: [
          { ok: true, t: { en: 'Be at least 35 years old', es: 'Tener al menos 35 años', fa: 'دست کم ۳۵ سال داشتن' },
            why: { en: 'Yes! Article II says a President must be at least 35 years old.', es: '¡Sí! El Artículo II dice que un presidente debe tener al menos 35 años.', fa: 'بله! مادهٔ دوم می‌گوید رئیس جمهور باید دست کم ۳۵ سال داشته باشد.' } },
          { t: { en: 'Be at least 18 years old', es: 'Tener al menos 18 años', fa: 'دست کم ۱۸ سال داشتن' },
            why: { en: 'No. At 18 you can vote. To be President, you must be at least 35.', es: 'No. A los 18 puedes votar. Para ser presidente debes tener al menos 35.', fa: 'نه. در ۱۸ سالگی رأی داده می‌توانی. برای رئیس جمهور شدن باید دست کم ۳۵ ساله باشی.' } },
          { t: { en: 'Serve in Congress first', es: 'Servir antes en el Congreso', fa: 'اول در کانگرس کار کردن' },
            why: { en: 'No. Many Presidents served in Congress, but the Constitution does not ask for it.', es: 'No. Muchos presidentes estuvieron en el Congreso, pero la Constitución no lo pide.', fa: 'نه. بسیاری از رئیس جمهورها در کانگرس بودند، اما قانون اساسی این را نمی‌خواهد.' } }
        ]
      }
    },
    {
      x: 24, y: 2,
      name: { en: 'Mr. Okafor', es: 'Sr. Okafor', fa: 'آقای اوکافور' },
      role: { en: 'Park ranger', es: 'Guardaparques', fa: 'نگهبان پارک' },
      look: { skin: 5, hair: '#120c08', shirt: '#7a8a5a', pants: '#4a3a2a', hat: '#8a6a3a', style: 'short' },
      lines: [
        { en: 'I am a park ranger. This is Lafayette Square, across from the White House.', es: 'Soy guardaparques. Esta es la Plaza Lafayette, frente a la Casa Blanca.', fa: 'من نگهبان پارک هستم. این میدان لافایت است، روبروی قصر سفید.' },
        { en: 'The President is our [[chief diplomat|Chief Diplomat]]. He or she meets world leaders.', es: 'El presidente es nuestro [[chief diplomat|Jefe de la diplomacia]]. Se reúne con líderes del mundo.', fa: 'رئیس جمهور [[chief diplomat|رهبر دیپلماسی]] ماست. او با رهبران جهان دیدار می‌کند.' },
        { en: 'The President makes [[treaty|treaties]], deals with other countries.', es: 'El presidente hace [[treaty|tratados]], acuerdos con otros países.', fa: 'رئیس جمهور [[treaty|معاهده‌ها]] می‌بندد، یعنی توافق با کشورهای دیگر.' },
        { en: 'But two thirds of the Senate must approve each treaty.', es: 'Pero dos tercios del Senado deben aprobar cada tratado.', fa: 'اما دو سوم سنا باید هر معاهده را تأیید کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The President makes a treaty with another country. Who must approve it?', es: 'El presidente hace un tratado con otro país. ¿Quién debe aprobarlo?', fa: 'رئیس جمهور با کشور دیگر معاهده می‌بندد. کی باید آن را تأیید کند؟' },
        choices: [
          { ok: true, t: { en: 'Two thirds of the Senate', es: 'Dos tercios del Senado', fa: 'دو سوم سنا' },
            why: { en: 'Right! A treaty needs a two-thirds vote of the Senate. That checks the President.', es: '¡Correcto! Un tratado necesita el voto de dos tercios del Senado. Eso controla al presidente.', fa: 'درست! معاهده رأی دو سوم سنا را لازم دارد. این قدرت رئیس جمهور را کنترول می‌کند.' } },
          { t: { en: 'Half of the House members', es: 'La mitad de los miembros de la Cámara', fa: 'نیم اعضای مجلس نمایندگان' },
            why: { en: 'No. The House does not vote on treaties. The Senate does, with two thirds.', es: 'No. La Cámara no vota los tratados. Lo hace el Senado, con dos tercios.', fa: 'نه. مجلس نمایندگان به معاهده رأی نمی‌دهد. سنا با دو سوم رأی می‌دهد.' } },
          { t: { en: 'All nine Supreme Court justices', es: 'Los nueve jueces de la Corte Suprema', fa: 'هر نُه قاضی ستره محکمه' },
            why: { en: 'No. Courts do not approve treaties. Two thirds of the Senate must say yes.', es: 'No. Las cortes no aprueban tratados. Dos tercios del Senado deben decir que sí.', fa: 'نه. محکمه‌ها معاهده را تأیید نمی‌کنند. دو سوم سنا باید «بله» بگوید.' } }
        ]
      }
    },
    {
      x: 19, y: 19,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Reporter', es: 'Reportera', fa: 'خبرنگار' },
      look: { skin: 1, hair: '#3a2416', shirt: '#2f8f8f', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am a reporter. I write about what the President does each day.', es: 'Soy reportera. Escribo sobre lo que hace el presidente cada día.', fa: 'من خبرنگار هستم. دربارهٔ کارهای هر روز رئیس جمهور می‌نویسم.' },
        { en: 'Most years the President gives the [[state of the union|State of the Union]] speech to Congress.', es: 'Casi cada año el presidente da el discurso del [[state of the union|Estado de la Unión]] al Congreso.', fa: 'تقریباً هر سال رئیس جمهور سخنرانی [[state of the union|حال کشور]] را برای کانگرس می‌کند.' },
        { en: 'He or she asks for laws, then signs or [[veto|vetoes]] bills. That is [[chief legislator|Chief Legislator]].', es: 'Pide leyes y luego firma o [[veto|veta]] proyectos. Eso es [[chief legislator|Legislador en jefe]].', fa: 'او قانون می‌خواهد، بعد لایحه‌ها را امضا یا [[veto|ویتو]] می‌کند. این [[chief legislator|رهبر قانون‌گذاری]] است.' },
        { en: 'The President is [[commander in chief|Commander in Chief]] of the armed forces, but only Congress declares war.', es: 'El presidente es [[commander in chief|Comandante en Jefe]] de las fuerzas armadas, pero solo el Congreso declara la guerra.', fa: 'رئیس جمهور [[commander in chief|سرقوماندان]] قوای مسلح است، اما فقط کانگرس اعلان جنگ می‌کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The President leads the armed forces. Who has the power to declare war?', es: 'El presidente dirige las fuerzas armadas. ¿Quién tiene el poder de declarar la guerra?', fa: 'رئیس جمهور قوای مسلح را رهبری می‌کند. قدرت اعلان جنگ دست کیست؟' },
        choices: [
          { ok: true, t: { en: 'Congress', es: 'El Congreso', fa: 'کانگرس' },
            why: { en: 'Yes! The Constitution gives Congress the power to declare war. It checks the President.', es: '¡Sí! La Constitución le da al Congreso el poder de declarar la guerra. Así controla al presidente.', fa: 'بله! قانون اساسی قدرت اعلان جنگ را به کانگرس می‌دهد. این رئیس جمهور را کنترول می‌کند.' } },
          { t: { en: 'The President alone', es: 'Solo el presidente', fa: 'فقط رئیس جمهور' },
            why: { en: 'No. The President leads the armed forces, but Congress declares war.', es: 'No. El presidente dirige las fuerzas armadas, pero el Congreso declara la guerra.', fa: 'نه. رئیس جمهور قوای مسلح را رهبری می‌کند، اما کانگرس اعلان جنگ می‌کند.' } },
          { t: { en: 'The top general', es: 'El general más alto', fa: 'بزرگ‌ترین جنرال' },
            why: { en: 'No. Generals follow orders. In the US, only Congress can declare war.', es: 'No. Los generales siguen órdenes. En EE. UU., solo el Congreso declara la guerra.', fa: 'نه. جنرال‌ها از امر پیروی می‌کنند. در امریکا فقط کانگرس اعلان جنگ می‌کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 4, text: { en: 'LAFAYETTE SQUARE · WASHINGTON, DC · A park across the street from the White House.', es: 'PLAZA LAFAYETTE · WASHINGTON, DC · Un parque frente a la Casa Blanca.', fa: 'میدان لافایت · واشنگتن دی سی · یک پارک روبروی قصر سفید.' } },
    { x: 5, y: 7, text: { en: 'EISENHOWER EXECUTIVE OFFICE BUILDING · Many White House workers have offices here.', es: 'EDIFICIO EISENHOWER DE OFICINAS EJECUTIVAS · Aquí tienen oficinas muchos trabajadores de la Casa Blanca.', fa: 'ساختمان دفترهای اجرائیهٔ آیزنهاور · بسیاری از کارمندان قصر سفید اینجا دفتر دارند.' } },
    { x: 29, y: 7, text: { en: 'EAST: PENNSYLVANIA AVENUE TO THE US CAPITOL, WHERE CONGRESS MAKES LAWS', es: 'ESTE: AVENIDA PENSILVANIA HACIA EL CAPITOLIO, DONDE EL CONGRESO HACE LEYES', fa: 'شرق: سرک پنسلوانیا تا کاپیتول امریکا، جایی که کانگرس قانون می‌سازد' } },
    { x: 4, y: 18, text: { en: 'THE ELLIPSE · A MEMORIAL TO US SOLDIERS WHO DIED IN WAR', es: 'LA ELIPSE · UN MONUMENTO A LOS SOLDADOS DE EE. UU. QUE MURIERON EN LA GUERRA', fa: 'الیپس · یادگاری برای سربازان امریکایی که در جنگ کشته شدند' } },
    { x: 22, y: 17, text: { en: 'THE ELLIPSE · Look north to see the South Lawn of the White House.', es: 'LA ELIPSE · Mira al norte para ver el Jardín Sur de la Casa Blanca.', fa: 'الیپس · به طرف شمال ببین تا چمن جنوبی قصر سفید را ببینی.' } }
  ],

  /* the quest: Farid (gold !) in Lafayette Square, north-west -> the guard east of the fence, south-east
     -> Tomás the gardener on the Ellipse, south-west: bring him the true poster card -> back to Farid */
  quest: {
    stat: 'pla',
    title: { en: 'The Lost Poster Card', es: 'La tarjeta perdida del cartel', fa: 'کارت گمشدهٔ پوستر' },
    giver: {
      x: 9, y: 2,
      name: { en: 'Farid', es: 'Farid', fa: 'فرید' },
      role: { en: 'Visiting student', es: 'Estudiante de visita', fa: 'شاگرد مهمان' },
      look: { skin: 2, hair: '#1a1008', shirt: '#d9542b', pants: '#2a4a3a', style: 'short' },
      lines: [
        { en: 'My class is making a poster: Who can be President?', es: 'Mi clase hace un cartel: ¿Quién puede ser presidente?', fa: 'صنف ما یک پوستر می‌سازد: کی رئیس جمهور شده می‌تواند؟' },
        { en: 'The wind took our last card! Ask the guard, east of the fence.', es: '¡El viento se llevó nuestra última tarjeta! Pregúntale al guardia, al este de la cerca.', fa: 'باد کارت آخر ما را برد! از نگهبان، شرق کتاره، بپرس.' }
      ],
      wait: { en: 'The guard stands south of the Treasury Building, east of the fence.', es: 'El guardia está al sur del edificio del Tesoro, al este de la cerca.', fa: 'نگهبان در جنوب ساختمان خزانه، شرق کتاره، ایستاده است.' },
      thanks: { en: 'Our poster is done! Now everyone can see who can be President. Thanks!', es: '¡Nuestro cartel está listo! Ahora todos ven quién puede ser presidente. ¡Gracias!', fa: 'پوستر ما تمام شد! حالا همه می‌بینند کی رئیس جمهور شده می‌تواند. تشکر!' }
    },
    contact: {
      x: 26, y: 14,
      name: { en: 'Officer Ruiz', es: 'Agente Ruiz', fa: 'افسر رویز' },
      role: { en: 'Guard', es: 'Guardia', fa: 'نگهبان' },
      look: { skin: 4, hair: '#120c08', shirt: '#2a2a3a', pants: '#2a2a3a', hat: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'On the South Lawn, the President welcomes leaders with flags and music.', es: 'En el Jardín Sur, el presidente recibe a líderes con banderas y música.', fa: 'در چمن جنوبی، رئیس جمهور با بیرق و موسیقی از رهبران استقبال می‌کند.' },
        { en: 'That is the [[head of state|Head of State]] job: the symbol of the nation.', es: 'Ese es el trabajo de [[head of state|Jefe de Estado]]: el símbolo de la nación.', fa: 'این کار [[head of state|رئیس دولت]] است: نشانهٔ ملت.' },
        { en: 'Cards blew south-west, to the Ellipse. Ask the gardener there.', es: 'Unas tarjetas volaron al suroeste, a la Elipse. Pregúntale al jardinero de allí.', fa: 'کارت‌ها به جنوب غرب، طرف الیپس، پرواز کردند. از باغبان آنجا بپرس.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 10, y: 18,
        name: { en: 'Tomás', es: 'Tomás', fa: 'توماس' },
        role: { en: 'Gardener', es: 'Jardinero', fa: 'باغبان' },
        look: { skin: 2, hair: '#3a2416', shirt: '#5a8a3a', pants: '#4a3a2a', hat: '#c0a060', style: 'short' },
        lines: [
          { en: 'I keep the flowers on the Ellipse. Three cards blew all over the park!', es: 'Cuido las flores de la Elipse. ¡Tres tarjetas volaron por todo el parque!', fa: 'من گل‌های الیپس را نگه می‌دارم. سه کارت در همه جای پارک پرواز کردند!' }
        ]
      },
      q: { en: 'Only one card tells a true rule to be President. Bring that one to me.', es: 'Solo una tarjeta dice una regla verdadera para ser presidente. Tráemela.', fa: 'فقط یک کارت قانون درستِ رئیس جمهور شدن را می‌گوید. آن را برایم بیاور.' },
      choices: [
        { ok: true, at: [1, 20], icon: '🪧', t: { en: 'Card: lived in the US 14 years', es: 'Tarjeta: vivió en EE. UU. 14 años', fa: 'کارت: ۱۴ سال در امریکا زندگی کرده' },
          why: { en: 'Yes! A President must have lived in the United States for at least 14 years.', es: '¡Sí! Un presidente debe haber vivido en Estados Unidos al menos 14 años.', fa: 'بله! رئیس جمهور باید دست کم ۱۴ سال در ایالات متحده زندگی کرده باشد.' } },
        { at: [29, 20], icon: '🪧', t: { en: 'Card: must be at least 25', es: 'Tarjeta: debe tener al menos 25', fa: 'کارت: باید دست کم ۲۵ ساله باشد' },
          why: { en: 'Not this one. 25 is the age for the House. A President must be at least 35.', es: 'Esta no. 25 es la edad para la Cámara. Un presidente debe tener al menos 35.', fa: 'این نه. ۲۵ سن مجلس نمایندگان است. رئیس جمهور باید دست کم ۳۵ ساله باشد.' } },
        { at: [2, 7], icon: '🪧', t: { en: 'Card: must have a college degree', es: 'Tarjeta: debe tener título universitario', fa: 'کارت: باید سند پوهنتون داشته باشد' },
          why: { en: 'No. The Constitution asks for no school degree. It names age, citizenship and years here.', es: 'No. La Constitución no pide ningún título. Pide edad, ciudadanía y años aquí.', fa: 'نه. قانون اساسی سند تحصیلی نمی‌خواهد. سن، شهروندی و سال‌های زندگی اینجا را می‌گوید.' } }
      ],
      item: { icon: '🪧', name: { en: 'Poster card: lived in the US 14 years', es: 'Tarjeta: vivió en EE. UU. 14 años', fa: 'کارت پوستر: ۱۴ سال در امریکا زندگی کرده' } }
    }
  },

  scraps: [[30, 1], [1, 15], [30, 19]],
  smudges: [[22, 2], [16, 19]],

  challenge: {
    at: [16, 5],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // Chief Diplomat by Blair House (the guest house for world leaders), Head of State at the North Lawn fence,
    // Chief Legislator at the east end of Pennsylvania Avenue (the road to Congress), Chief Executive by the EEOB,
    // Commander in Chief by the soldiers' memorial on the Ellipse
    zones: [{ bin: 'dip', x: 4, y: 3, w: 3, h: 2 }, { bin: 'head', x: 18, y: 6, w: 4, h: 1 }, { bin: 'leg', x: 27, y: 5, w: 3, h: 2 },
      { bin: 'exec', x: 1, y: 13, w: 3, h: 2 }, { bin: 'cmd', x: 5, y: 18, w: 3, h: 2 }],
    stat: 'pla',
    title: { en: 'Which job is it?', es: '¿Qué trabajo es?', fa: 'این کدام کار است؟' },
    intro: { en: 'Carry each task card to the President\'s job that does it.',
      es: 'Lleva cada tarjeta de tarea al trabajo del presidente que la hace.',
      fa: 'هر کارت کار را پیش آن نقش رئیس جمهور ببر که آن را انجام می‌دهد.' },
    bins: [
      { id: 'cmd', icon: '🎖️', label: { en: 'Commander in Chief', es: 'Comandante en Jefe', fa: 'سرقوماندان' }, sub: { en: 'leads the armed forces', es: 'dirige las fuerzas armadas', fa: 'قوای مسلح را رهبری می‌کند' } },
      { id: 'dip', icon: '🤝', label: { en: 'Chief Diplomat', es: 'Jefe de la diplomacia', fa: 'رهبر دیپلماسی' }, sub: { en: 'works with other countries', es: 'trata con otros países', fa: 'با کشورهای دیگر کار می‌کند' } },
      { id: 'head', icon: '🇺🇸', label: { en: 'Head of State', es: 'Jefe de Estado', fa: 'رئیس دولت' }, sub: { en: 'the symbol of the nation', es: 'el símbolo de la nación', fa: 'نشانهٔ ملت' } },
      { id: 'exec', icon: '🗂️', label: { en: 'Chief Executive', es: 'Jefe del Ejecutivo', fa: 'رئیس اجرائیه' }, sub: { en: 'carries out the laws', es: 'hace cumplir las leyes', fa: 'قانون‌ها را اجرا می‌کند' } },
      { id: 'leg', icon: '📜', label: { en: 'Chief Legislator', es: 'Legislador en jefe', fa: 'رهبر قانون‌گذاری' }, sub: { en: 'works with Congress on laws', es: 'trabaja con el Congreso en las leyes', fa: 'با کانگرس روی قانون‌ها کار می‌کند' } }
    ],
    items: [
      { bin: 'cmd', t: { en: 'Give orders to the Army, Navy and Air Force', es: 'Dar órdenes al Ejército, la Marina y la Fuerza Aérea', fa: 'امر دادن به اردو، قوای بحری و قوای هوایی' },
        why: { en: 'The President is the top leader of the armed forces. That is [[commander in chief|Commander in Chief]].', es: 'El presidente es el líder más alto de las fuerzas armadas. Eso es [[commander in chief|Comandante en Jefe]].', fa: 'رئیس جمهور بالاترین رهبر قوای مسلح است. این [[commander in chief|سرقوماندان]] است.' } },
      { bin: 'cmd', t: { en: 'Meet with generals to plan how to keep the nation safe', es: 'Reunirse con generales para planear cómo proteger a la nación', fa: 'دیدار با جنرال‌ها برای پلان امنیت کشور' },
        why: { en: 'Leading the military is the Commander in Chief job. Only Congress can declare war.', es: 'Dirigir a los militares es el trabajo de Comandante en Jefe. Solo el Congreso declara la guerra.', fa: 'رهبری قوای نظامی کار سرقوماندان است. فقط کانگرس اعلان جنگ می‌کند.' } },
      { bin: 'dip', t: { en: 'Make a treaty with another country', es: 'Hacer un tratado con otro país', fa: 'بستن معاهده با کشور دیگر' },
        why: { en: 'Treaties are deals with other lands. That is [[chief diplomat|Chief Diplomat]]. Two thirds of the Senate must approve.', es: 'Los tratados son acuerdos con otros países. Eso es [[chief diplomat|Jefe de la diplomacia]]. El Senado aprueba con dos tercios.', fa: 'معاهده توافق با کشورهای دیگر است. این [[chief diplomat|رهبر دیپلماسی]] است. دو سوم سنا باید تأیید کند.' } },
      { bin: 'dip', t: { en: 'Choose an ambassador to send to Mexico', es: 'Elegir un embajador para enviar a México', fa: 'انتخاب یک سفیر برای فرستادن به مکسیکو' },
        why: { en: 'Ambassadors speak for the US in other lands. Picking them is the Chief Diplomat job.', es: 'Los embajadores hablan por EE. UU. en otros países. Elegirlos es trabajo del Jefe de la diplomacia.', fa: 'سفیرها در کشورهای دیگر از طرف امریکا گپ می‌زنند. انتخاب‌شان کار رهبر دیپلماسی است.' } },
      { bin: 'head', t: { en: 'Give a medal to a brave firefighter', es: 'Dar una medalla a un bombero valiente', fa: 'دادن مدال به یک آتش‌نشان شجاع' },
        why: { en: 'Giving medals honors people for the whole nation. That is [[head of state|Head of State]].', es: 'Dar medallas honra a la gente en nombre de la nación. Eso es [[head of state|Jefe de Estado]].', fa: 'دادن مدال از طرف تمام ملت به مردم احترام می‌گذارد. این [[head of state|رئیس دولت]] است.' } },
      { bin: 'head', t: { en: 'Welcome the champion team to the White House', es: 'Recibir al equipo campeón en la Casa Blanca', fa: 'استقبال از تیم قهرمان در قصر سفید' },
        why: { en: 'Ceremonies and welcoming visitors are the Head of State job, the symbol of the nation.', es: 'Las ceremonias y recibir visitas son trabajo del Jefe de Estado, el símbolo de la nación.', fa: 'مراسم و استقبال از مهمانان کار رئیس دولت است، نشانهٔ ملت.' } },
      { bin: 'exec', t: { en: 'Make sure the laws of Congress are carried out', es: 'Asegurar que se cumplan las leyes del Congreso', fa: 'مطمئن شدن که قانون‌های کانگرس اجرا شوند' },
        why: { en: 'Carrying out the laws is the main job of the [[chief executive|Chief Executive]].', es: 'Hacer cumplir las leyes es el trabajo principal del [[chief executive|Jefe del Ejecutivo]].', fa: 'اجرای قانون‌ها کار اصلی [[chief executive|رئیس اجرائیه]] است.' } },
      { bin: 'exec', t: { en: 'Pick a new Secretary of State for the Cabinet', es: 'Elegir un nuevo Secretario de Estado para el Gabinete', fa: 'انتخاب یک وزیر خارجهٔ نو برای کابینه' },
        why: { en: 'The Chief Executive picks [[cabinet|Cabinet]] heads to run departments. The Senate confirms them.', es: 'El Jefe del Ejecutivo elige a los jefes del [[cabinet|Gabinete]]. El Senado los confirma.', fa: 'رئیس اجرائیه رئیسان [[cabinet|کابینه]] را انتخاب می‌کند. سنا آنها را تأیید می‌کند.' } },
      { bin: 'leg', t: { en: 'Veto a bill from Congress', es: 'Vetar un proyecto del Congreso', fa: 'ویتو کردن یک لایحهٔ کانگرس' },
        why: { en: 'Signing or vetoing bills is the [[chief legislator|Chief Legislator]] job.', es: 'Firmar o vetar proyectos es el trabajo del [[chief legislator|Legislador en jefe]].', fa: 'امضا یا ویتو کردن لایحه‌ها کار [[chief legislator|رهبر قانون‌گذاری]] است.' } },
      { bin: 'leg', t: { en: 'Give the State of the Union speech', es: 'Dar el discurso del Estado de la Unión', fa: 'سخنرانی حال کشور' },
        why: { en: 'In this speech the President asks Congress for new laws. That is the Chief Legislator job.', es: 'En este discurso el presidente pide leyes nuevas al Congreso. Es trabajo del Legislador en jefe.', fa: 'در این سخنرانی رئیس جمهور از کانگرس قانون‌های نو می‌خواهد. این کار رهبر قانون‌گذاری است.' } }
    ],
    success: { en: 'Every task is with the right job! One President, many roles.', es: '¡Cada tarea está con el trabajo correcto! Un presidente, muchos papeles.', fa: 'هر کار پیش نقش درست است! یک رئیس جمهور، نقش‌های زیاد.' }
  },

  boss: {
    at: [14, 19],
    stat: 'pla',
    need: 3,
    name: { en: 'The Crown Grump', es: 'El Gruñón Coronado', fa: 'غرغروی تاج‌دار' },
    appear: { en: 'The Crown Grump is hiding in the fog on the Ellipse!', es: '¡El Gruñón Coronado se esconde en la niebla de la Elipse!', fa: 'غرغروی تاج‌دار در مه روی الیپس پنهان است!' },
    taunt: { en: 'President? Bah! I want a crown and a throne, and no Congress to stop me!', es: '¿Presidente? ¡Bah! ¡Quiero una corona y un trono, y ningún Congreso que me pare!', fa: 'رئیس جمهور؟ بَه! تاج و تخت می‌خواهم، و هیچ کانگرسی که جلویم را بگیرد!' },
    win: { en: 'The fog lifts off the Ellipse. Charter page 6.1 floats down into your hands!', es: 'La niebla se va de la Elipse. ¡La página 6.1 de la carta cae en tus manos!', fa: 'مه از روی الیپس کنار می‌رود. صفحهٔ ۶.۱ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which part of the Constitution sets up the executive branch?', es: '¿Qué parte de la Constitución crea el poder ejecutivo?', fa: 'کدام بخش قانون اساسی قوهٔ اجرائیه را می‌سازد؟' },
        choices: [
          { en: 'Article II', es: 'El Artículo II', fa: 'مادهٔ دوم' },
          { en: 'Article I', es: 'El Artículo I', fa: 'مادهٔ اول' },
          { en: 'Article III', es: 'El Artículo III', fa: 'مادهٔ سوم' },
          { en: 'Article V', es: 'El Artículo V', fa: 'مادهٔ پنجم' }],
        answer: 0,
        why: { en: 'Article II is about the President. Article I is about Congress; Article III, the courts.', es: 'El Artículo II trata del presidente. El I trata del Congreso; el III, de las cortes.', fa: 'مادهٔ دوم دربارهٔ رئیس جمهور است. مادهٔ اول دربارهٔ کانگرس؛ مادهٔ سوم، محکمه‌ها.' } },
      { q: { en: 'How old must a President be, at least?', es: '¿Cuántos años debe tener un presidente, como mínimo?', fa: 'رئیس جمهور دست کم چند ساله باید باشد؟' },
        choices: [
          { en: '35 years old', es: '35 años', fa: '۳۵ ساله' },
          { en: '25 years old', es: '25 años', fa: '۲۵ ساله' },
          { en: '30 years old', es: '30 años', fa: '۳۰ ساله' },
          { en: '40 years old', es: '40 años', fa: '۴۰ ساله' }],
        answer: 0,
        why: { en: 'A President must be at least 35. A senator must be 30, a House member 25.', es: 'Un presidente debe tener al menos 35. Un senador, 30; un miembro de la Cámara, 25.', fa: 'رئیس جمهور دست کم ۳۵ ساله باشد. سناتور ۳۰، عضو مجلس نمایندگان ۲۵.' } },
      { q: { en: 'How long is one term for a President?', es: '¿Cuánto dura un período de un presidente?', fa: 'یک دورهٔ رئیس جمهور چقدر است؟' },
        choices: [
          { en: '4 years', es: '4 años', fa: '۴ سال' },
          { en: '2 years', es: '2 años', fa: '۲ سال' },
          { en: '6 years', es: '6 años', fa: '۶ سال' },
          { en: '8 years', es: '8 años', fa: '۸ سال' }],
        answer: 0,
        why: { en: 'A President serves a 4-year term. A President can be elected only twice.', es: 'Un presidente sirve un período de 4 años. Solo puede ser elegido dos veces.', fa: 'رئیس جمهور یک دورهٔ ۴ ساله کار می‌کند. او فقط دو بار انتخاب شده می‌تواند.' } },
      { q: { en: 'The President makes a treaty. Who must approve it?', es: 'El presidente hace un tratado. ¿Quién debe aprobarlo?', fa: 'رئیس جمهور معاهده می‌بندد. کی باید آن را تأیید کند؟' },
        choices: [
          { en: 'Two thirds of the Senate', es: 'Dos tercios del Senado', fa: 'دو سوم سنا' },
          { en: 'Half of the House members', es: 'La mitad de los miembros de la Cámara', fa: 'نیم اعضای مجلس نمایندگان' },
          { en: 'The nine Supreme Court justices', es: 'Los nueve jueces de la Corte Suprema', fa: 'نُه قاضی ستره محکمه' },
          { en: 'Every state governor', es: 'Cada gobernador estatal', fa: 'هر والی ایالت' }],
        answer: 0,
        why: { en: 'A treaty needs a two-thirds vote in the Senate. This is a check on the President.', es: 'Un tratado necesita dos tercios del Senado. Es un control sobre el presidente.', fa: 'معاهده رأی دو سوم سنا را لازم دارد. این یک کنترول بر رئیس جمهور است.' } },
      { q: { en: 'The President gives orders to the Navy. Which role is this?', es: 'El presidente da órdenes a la Marina. ¿Qué papel es este?', fa: 'رئیس جمهور به قوای بحری امر می‌دهد. این کدام نقش است؟' },
        choices: [
          { en: 'Commander in Chief', es: 'Comandante en Jefe', fa: 'سرقوماندان' },
          { en: 'Chief Diplomat', es: 'Jefe de la diplomacia', fa: 'رهبر دیپلماسی' },
          { en: 'Head of State', es: 'Jefe de Estado', fa: 'رئیس دولت' },
          { en: 'Chief Legislator', es: 'Legislador en jefe', fa: 'رهبر قانون‌گذاری' }],
        answer: 0,
        why: { en: 'The President leads the armed forces as Commander in Chief. Congress declares war.', es: 'El presidente dirige las fuerzas armadas como Comandante en Jefe. El Congreso declara la guerra.', fa: 'رئیس جمهور به حیث سرقوماندان قوای مسلح را رهبری می‌کند. کانگرس اعلان جنگ می‌کند.' } },
      { q: { en: 'The President gives a medal to a hero. Which role is this?', es: 'El presidente da una medalla a un héroe. ¿Qué papel es este?', fa: 'رئیس جمهور به یک قهرمان مدال می‌دهد. این کدام نقش است؟' },
        choices: [
          { en: 'Head of State', es: 'Jefe de Estado', fa: 'رئیس دولت' },
          { en: 'Chief Executive', es: 'Jefe del Ejecutivo', fa: 'رئیس اجرائیه' },
          { en: 'Chief Legislator', es: 'Legislador en jefe', fa: 'رهبر قانون‌گذاری' },
          { en: 'Commander in Chief', es: 'Comandante en Jefe', fa: 'سرقوماندان' }],
        answer: 0,
        why: { en: 'As Head of State, the President is the symbol of the nation: medals, ceremonies, guests.', es: 'Como Jefe de Estado, el presidente es el símbolo de la nación: medallas, ceremonias, visitas.', fa: 'به حیث رئیس دولت، رئیس جمهور نشانهٔ ملت است: مدال، مراسم، مهمان.' } },
      { q: { en: 'The President vetoes a bill from Congress. Which role is this?', es: 'El presidente veta un proyecto del Congreso. ¿Qué papel es este?', fa: 'رئیس جمهور لایحهٔ کانگرس را ویتو می‌کند. این کدام نقش است؟' },
        choices: [
          { en: 'Chief Legislator', es: 'Legislador en jefe', fa: 'رهبر قانون‌گذاری' },
          { en: 'Chief Diplomat', es: 'Jefe de la diplomacia', fa: 'رهبر دیپلماسی' },
          { en: 'Head of State', es: 'Jefe de Estado', fa: 'رئیس دولت' },
          { en: 'Commander in Chief', es: 'Comandante en Jefe', fa: 'سرقوماندان' }],
        answer: 0,
        why: { en: 'As Chief Legislator, the President asks for laws and signs or vetoes bills.', es: 'Como Legislador en jefe, el presidente pide leyes y firma o veta proyectos.', fa: 'به حیث رهبر قانون‌گذاری، رئیس جمهور قانون می‌خواهد و لایحه‌ها را امضا یا ویتو می‌کند.' } },
      { q: { en: 'Who is in the President\'s Cabinet?', es: '¿Quiénes forman el Gabinete del presidente?', fa: 'کی‌ها در کابینهٔ رئیس جمهور هستند؟' },
        choices: [
          { en: 'Heads of the departments', es: 'Los jefes de los departamentos', fa: 'رئیسان وزارت‌ها' },
          { en: 'Leaders of the House', es: 'Los líderes de la Cámara', fa: 'رهبران مجلس نمایندگان' },
          { en: 'Justices of the courts', es: 'Los jueces de las cortes', fa: 'قاضیان محکمه‌ها' },
          { en: 'Governors of the states', es: 'Los gobernadores de los estados', fa: 'والی‌های ایالت‌ها' }],
        answer: 0,
        why: { en: 'Cabinet members, like the Secretary of State, lead departments and advise the President.', es: 'Los miembros del Gabinete, como el Secretario de Estado, dirigen departamentos y aconsejan al presidente.', fa: 'اعضای کابینه، مثل وزیر خارجه، وزارت‌ها را رهبری می‌کنند و به رئیس جمهور مشوره می‌دهند.' } }
    ]
  },

  learned: [
    { en: '[[article ii|Article II]]: a President is a natural-born citizen, at least 35, 14 years in the US.', es: '[[article ii|Artículo II]]: un presidente es ciudadano de nacimiento, de 35 años o más, con 14 años en EE. UU.', fa: '[[article ii|مادهٔ دوم]]: رئیس جمهور شهروند از تولد، دست کم ۳۵ ساله، و ۱۴ سال در امریکا است.' },
    { en: 'The President has many roles: Commander in Chief, Chief Diplomat, Head of State, and more.', es: 'El presidente tiene muchos papeles: Comandante en Jefe, Jefe de la diplomacia, Jefe de Estado y más.', fa: 'رئیس جمهور نقش‌های زیاد دارد: سرقوماندان، رهبر دیپلماسی، رئیس دولت و دیگر.' },
    { en: 'Congress checks the President: it declares war, and the Senate approves treaties and the Cabinet.', es: 'El Congreso controla al presidente: declara la guerra, y el Senado aprueba tratados y el Gabinete.', fa: 'کانگرس رئیس جمهور را کنترول می‌کند: اعلان جنگ می‌کند، و سنا معاهده‌ها و کابینه را تأیید می‌کند.' }
  ],
  reflect: {
    q: { en: 'Which of the President\'s jobs seems hardest to you? Why?', es: '¿Cuál de los trabajos del presidente te parece más difícil? ¿Por qué?', fa: 'به نظر تو کدام کار رئیس جمهور از همه سخت‌تر است؟ چرا؟' },
    starter: { en: 'The hardest job is', es: 'El trabajo más difícil es', fa: 'سخت‌ترین کار ...' }
  }
};
