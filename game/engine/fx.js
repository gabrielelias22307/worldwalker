/* WORLDWALKER engine · the living world: butterflies, birds, fish, chimney smoke, cloud shadows,
   weather and time of day for each episode, and little bursts of sparkle and dust.
   Everything is drawn on top of the map canvas each frame. */
(function () {
  const TS = 16, SW = 16, SH = 11, VW = SW * TS, VH = SH * TS;
  const { hash } = WW;
  const calm = () => WW.calm;

  /* weather and time of day for each episode (an episode file can also set its own: weather: { sky, time }) */
  const SKY = {
    '1.1': { life: 1 }, '1.2': { life: 1 }, '1.3': { life: 1 },
    '2.1': { sky: 'leaves' }, '2.2': { sky: 'drizzle' }, '2.3': { time: 'sunset' },
    '3.1': { sky: 'drizzle' }, '3.2': { sky: 'snow' }, '3.3': { time: 'sunset', sky: 'dust' },
    '4.1': { sky: 'heat' }, '4.2': { time: 'sunset' }, '4.3': { life: 1 },
    '5.1': { sky: 'heat' }, '5.2': { time: 'sunset' }, '5.3': { sky: 'heat' },
    '6.1': { sky: 'rain' }, '6.2': { sky: 'drizzle' }, '6.3': { life: 1 },
    '7.1': { sky: 'petals' }, '7.2': { life: 1 }, '7.3': { time: 'night' },
    '8.1': { sky: 'heat' }, '8.2': { life: 1 }, '8.3': { time: 'sunset' }
  };
  let sky = {}, map = null, parts = [], drops = [], amb = [], cur = '', clouds = [], dark = null, wind = 0.3;

  const rnd = Math.random;
  const tileAt = (x, y) => (map[y] || '')[x];

  function setup(ep) {
    sky = Object.assign({ sky: 'clear', time: 'day' }, SKY[ep.id] || {}, ep.weather || {});
    map = ep.map; parts = []; amb = []; cur = ''; dim = null; liftT = 0;
    WW.style.realm = ep.realm || +ep.id[0];
    WW.style.night = sky.time === 'night';
    wind = sky.sky === 'snow' ? 0.25 : sky.sky === 'dust' || sky.sky === 'heat' ? 0.9 : 0.35;
    drops = [];
    const n = { rain: 90, drizzle: 40, snow: 70, petals: 18, leaves: 14, dust: 26, heat: 14 }[sky.sky] || 0;
    for (let i = 0; i < n; i++) drops.push(newDrop(true));
    clouds = [];
  }
  function newDrop(anywhere) {
    return { x: rnd() * (VW + 40) - 20, y: anywhere ? rnd() * VH : -8 - rnd() * 20, s: 0.6 + rnd() * 0.8, ph: rnd() * 6, c: (rnd() * 4) | 0 };
  }

  /* things that live on one screen: made fresh each time the hero walks onto a new screen */
  function enterScreen(sx, sy) {
    const key = sx + ',' + sy; if (key === cur) return; cur = key;
    amb = [];
    const grass = [], water = [], chim = [];
    for (let y = 0; y < SH; y++) for (let x = 0; x < SW; x++) {
      const gx = sx * SW + x, gy = sy * SH + y, ch = tileAt(gx, gy);
      if ('.,"'.includes(ch)) grass.push([gx, gy]);
      if (ch === '~' || ch === '=') water.push([gx, gy]);
      if (WW.hasChimney && WW.hasChimney(map, gx, gy)) chim.push([gx, gy]);
    }
    const ox = sx * VW, oy = sy * VH;
    const clear = !['rain', 'drizzle', 'snow'].includes(sky.sky);
    if (sky.time === 'night') {
      grass.length > 20 && [0, 1, 2, 3, 4].forEach(i => { const g = grass[(hash(sx, sy, i) * grass.length) | 0]; amb.push({ k: 'fly', x: g[0] * TS + 8, y: g[1] * TS + 8, ph: i * 1.7 }); });
    } else if (clear && grass.length > 30) {
      [0, 1].forEach(i => { const g = grass[(hash(sx, sy, i + 3) * grass.length) | 0]; amb.push({ k: 'butterfly', x: g[0] * TS + 8, y: g[1] * TS + 8, tx: 0, ty: 0, c: ['#ffe36e', '#ff8fb1', '#ffffff', '#8fc3ff'][(i + sx + sy) % 4], ph: i * 2 }); });
    }
    if (water.length > 12) amb.push({ k: 'fishspot', spots: water, next: 0 });
    if (clear && sky.time !== 'night') amb.push({ k: 'birds', next: 2000 + rnd() * 4000, ox, oy });
    chim.forEach(([gx, gy]) => amb.push({ k: 'chimney', x: gx * TS + 11, y: gy * TS, next: 0 }));
  }

  /* bursts: sparkles, dust, smoke */
  function burst(gx, gy, kind) {
    if (calm() && kind !== 'gold') return;
    const x = gx * TS + 8, y = gy * TS + 8;
    // chips and leaves: a few bits of wood or grass fly up and fall
    const n = { gold: 16, purple: 22, dust: 4, snow: 4, splash: 6, poof: 30, chips: 8, leaves: 9 }[kind] || 8;
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, sp = kind === 'dust' || kind === 'snow' ? 0.15 + rnd() * 0.2 : kind === 'splash' ? 0.4 + rnd() * 0.3 : 0.5 + rnd() * 1.1;
      parts.push({
        x: kind === 'dust' || kind === 'snow' ? x + (rnd() - 0.5) * 8 : x, y: kind === 'dust' || kind === 'snow' ? y + 6 : y,
        vx: Math.cos(a) * sp, vy: kind === 'dust' || kind === 'snow' ? -0.1 - rnd() * 0.15 : kind === 'splash' || kind === 'chips' || kind === 'leaves' ? -0.8 - rnd() * 0.6 : Math.sin(a) * sp,
        g: kind === 'splash' || kind === 'chips' || kind === 'leaves' ? 0.06 : kind === 'gold' ? 0.02 : 0, life: kind === 'poof' ? 70 : kind === 'dust' || kind === 'snow' ? 26 : 45, age: 0, kind,
        size: kind === 'poof' ? 2 + ((rnd() * 3) | 0) : kind === 'dust' || kind === 'snow' ? 2 : 1 + ((rnd() * 2) | 0)
      });
    }
  }
  // a little dust when you walk on dry ground or snow
  function step(gx, gy) {
    const ch = tileAt(gx, gy);
    if ('su:g'.includes(ch)) burst(gx, gy, 'dust');
    else if ('nzi'.includes(ch)) burst(gx, gy, 'snow');
  }

  const PCOL = { gold: ['#fff3b0', '#f2c14e', '#ffffff'], purple: ['#a08cc8', '#6d5f8c', '#4b3f63'], poof: ['#a08cc8', '#6d5f8c', '#d8d0ec'], dust: ['rgba(201,176,100,.7)'], snow: ['rgba(255,255,255,.85)'], splash: ['#d8f0ff', '#ffffff'], chips: ['#c79a5b', '#8b5a2b', '#e8c48a'], leaves: ['#5cc46a', '#2e8b3a', '#a5d86a'] };

  /* ---------------- drawing ---------------- */
  // c: the map canvas. sx, sy: the screen being shown. hero: {x, y} in pixels on that screen. t: time in ms
  /* the Grump's dimness: the land starts grey and gets its color back as goals are done */
  let dim = null, liftT = 0, liftAt = null;
  function smudgeDim(c, t, dt, hero) {
    const g = WW.game, r = WW.run;
    const target = !g || !g.progress || !r ? 0 : r.bossDone ? 0 : 1 - g.progress();
    if (dim == null) dim = target;
    dim += (target - dim) * Math.min(1, dt / 700);
    if (dim > 0.01) {
      // the Grump's gloom: a dark mist creeping in from the edges of the screen (the middle keeps its full color)
      const g = c.createRadialGradient(VW / 2, VH / 2, VH * (0.55 - 0.12 * dim), VW / 2, VH / 2, VW * 0.62);
      g.addColorStop(0, 'rgba(40,20,60,0)'); g.addColorStop(1, `rgba(40,20,60,${0.55 * dim})`);
      c.fillStyle = g; c.fillRect(0, 0, VW, VH);
    }
    // the moment the Grump is beaten: a ring of light spreads out from the hero
    const k = (performance.now() - liftT) / 1400;
    if (liftT && k < 1) {
      const x = liftAt ? liftAt.x + 8 : VW / 2, y = liftAt ? liftAt.y + 8 : VH / 2, rad = 10 + k * 300;
      c.save(); c.globalCompositeOperation = 'lighter';
      c.strokeStyle = `rgba(255,240,180,${0.6 * (1 - k)})`; c.lineWidth = 10 * (1 - k) + 2;
      c.beginPath(); c.arc(x, y, rad, 0, 7); c.stroke();
      c.fillStyle = `rgba(255,250,220,${0.25 * (1 - k)})`; c.fillRect(0, 0, VW, VH);
      c.restore();
    }
  }
  function lift() { liftT = performance.now(); }

  function draw(c, sx, sy, hero, t, dt) {
    enterScreen(sx, sy);
    if (hero) liftAt = hero;
    smudgeDim(c, t, dt, hero);
    const ox = sx * VW, oy = sy * VH, k = Math.min(3, dt / 16.7);
    if (!calm()) {
      // cloud shadows drift over the whole world
      clouds.forEach(cl => {
        cl.x += cl.v * dt; if (cl.x - cl.r > VW * 2) cl.x = -cl.r * 2;
        c.fillStyle = 'rgba(30,50,60,.06)';
        c.beginPath(); c.ellipse(cl.x - VW / 2, cl.y, cl.r, cl.r * 0.55, 0, 0, 7); c.fill();
        c.beginPath(); c.ellipse(cl.x - VW / 2 + cl.r * 0.6, cl.y + cl.r * 0.15, cl.r * 0.7, cl.r * 0.4, 0, 0, 7); c.fill();
      });
      amb.forEach(a => ambient(c, a, ox, oy, t, dt, k));
    }
    // bursts
    parts = parts.filter(p => p.age < p.life);
    parts.forEach(p => {
      p.age += k; p.x += p.vx * k; p.y += p.vy * k; p.vy += p.g * k;
      if (p.kind === 'gold' || p.kind === 'purple' || p.kind === 'poof') { p.vx *= 0.96; p.vy *= 0.96; }
      const cols = PCOL[p.kind] || PCOL.gold, col = cols[(p.age / 6 | 0) % cols.length];
      const fade = 1 - p.age / p.life;
      if (p.kind === 'smoke') { // smoke puffs grow as they rise
        c.fillStyle = `rgba(230,230,235,${0.55 * fade})`;
        c.beginPath(); c.arc(p.x - ox, p.y - oy, 1.5 + p.age / 22, 0, 7); c.fill();
        return;
      }
      c.globalAlpha = Math.max(0, Math.min(1, fade * 1.5));
      c.fillStyle = col;
      const px = Math.round(p.x - ox), py = Math.round(p.y - oy);
      if (p.kind === 'gold' && p.size > 1) { c.fillRect(px - 1, py, 3, 1); c.fillRect(px, py - 1, 1, 3); }
      else c.fillRect(px, py, p.size, p.size);
      c.globalAlpha = 1;
    });
    weather(c, t, dt, k);
    light(c, sx, sy, hero, t);
  }

  function ambient(c, a, ox, oy, t, dt, k) {
    if (a.k === 'butterfly') {
      if (!a.tx || Math.hypot(a.tx - a.x, a.ty - a.y) < 3) { a.tx = ox + 16 + rnd() * (VW - 32); a.ty = oy + 16 + rnd() * (VH - 32); }
      a.x += Math.sign(a.tx - a.x) * 0.25 * k; a.y += Math.sign(a.ty - a.y) * 0.18 * k + Math.sin(t / 200 + a.ph) * 0.2;
      const x = Math.round(a.x - ox), y = Math.round(a.y - oy), open = Math.floor(t / 120 + a.ph) % 2;
      c.fillStyle = a.c; if (open) { c.fillRect(x - 2, y - 1, 2, 2); c.fillRect(x + 1, y - 1, 2, 2); } else { c.fillRect(x - 1, y - 2, 1, 2); c.fillRect(x + 1, y - 2, 1, 2); }
      c.fillStyle = '#22202e'; c.fillRect(x, y - 1, 1, 2);
    } else if (a.k === 'fly') {
      const x = Math.round(a.x - ox + Math.sin(t / 900 + a.ph) * 14), y = Math.round(a.y - oy + Math.cos(t / 700 + a.ph) * 9);
      const on = (Math.sin(t / 300 + a.ph * 3) + 1) / 2;
      c.fillStyle = `rgba(230,255,140,${0.25 + on * 0.75})`; c.fillRect(x, y, 1, 1);
      c.fillStyle = `rgba(230,255,140,${on * 0.25})`; c.fillRect(x - 1, y - 1, 3, 3);
    } else if (a.k === 'birds') {
      if (!a.fly) { a.next -= dt; if (a.next < 0) a.fly = { x: -10, y: 10 + rnd() * 40, v: 0.6 + rnd() * 0.3, n: 2 + ((rnd() * 2) | 0) }; return; }
      const f = a.fly; f.x += f.v * k;
      for (let i = 0; i < f.n; i++) {
        const x = Math.round(f.x - i * 9), y = Math.round(f.y + i * 5 + Math.sin(t / 300 + i) * 2), up = Math.floor(t / 150 + i) % 2;
        c.fillStyle = '#2b2b3a';
        c.fillRect(x, y, 1, 1); c.fillRect(x - 2, y - (up ? 1 : -1), 2, 1); c.fillRect(x + 1, y - (up ? 1 : -1), 2, 1);
      }
      if (f.x > VW + 40) { a.fly = null; a.next = 6000 + rnd() * 8000; }
    } else if (a.k === 'fishspot') {
      a.next -= dt;
      if (a.next < 0 && !a.jump) {
        const s = a.spots[(rnd() * a.spots.length) | 0];
        a.jump = { x: s[0] * TS + 8, y: s[1] * TS + 10, age: 0 }; a.next = 2500 + rnd() * 4000;
      }
      if (a.jump) {
        const j = a.jump; j.age += k;
        const p = j.age / 40, x = Math.round(j.x - ox + p * 10 - 5), y = Math.round(j.y - oy - Math.sin(p * Math.PI) * 10);
        if (p < 1) { c.fillStyle = '#e0e8f0'; c.fillRect(x, y, 3, 2); c.fillStyle = '#9fb4c8'; c.fillRect(x - 1, y + (p < .5 ? 1 : -1), 1, 1); }
        if (j.age === k || (p >= 1 && !j.splashed)) { burst((j.x + (p >= 1 ? 5 : -5)) / TS - 0.5, j.y / TS - 0.5, 'splash'); if (p >= 1) j.splashed = true; }
        if (p > 1.4) a.jump = null;
      }
    } else if (a.k === 'chimney') {
      a.next -= dt;
      if (a.next < 0) { a.next = 450 + rnd() * 250; parts.push({ x: a.x, y: a.y, vx: wind * 0.25, vy: -0.25, g: 0, life: 90, age: 0, kind: 'smoke', size: 2 }); }
    }
  }

  function weather(c, t, dt, k) {
    const s = sky.sky;
    if (!drops.length || calm()) { if (s === 'rain' || s === 'drizzle') { c.fillStyle = 'rgba(30,45,70,.05)'; c.fillRect(0, 0, VW, VH); } return; }
    if (s === 'rain' || s === 'drizzle') {
      c.fillStyle = s === 'rain' ? 'rgba(30,45,70,.06)' : 'rgba(40,55,80,.03)'; c.fillRect(0, 0, VW, VH);
      c.fillStyle = s === 'rain' ? 'rgba(210,228,255,.7)' : 'rgba(215,230,255,.55)';
      drops.forEach(d => {
        d.y += (s === 'rain' ? 5 : 3.2) * d.s * k; d.x -= (s === 'rain' ? 1.4 : 0.8) * k;
        c.fillRect(Math.round(d.x), Math.round(d.y), 1, s === 'rain' ? 5 : 3);
        if (d.y > VH || d.x < -10) {
          if (rnd() < 0.5) { c.fillStyle = 'rgba(220,235,255,.6)'; c.fillRect(Math.round(d.x) - 1, VH - 2 - ((rnd() * VH * 0.9) | 0), 3, 1); c.fillStyle = s === 'rain' ? 'rgba(200,220,255,.55)' : 'rgba(210,225,255,.45)'; }
          Object.assign(d, newDrop(false));
        }
      });
      // splashes on the ground
      for (let i = 0; i < (s === 'rain' ? 4 : 2); i++) { const x = (hash(i, (t / 120) | 0, 1) * VW) | 0, y = (hash(i, (t / 120) | 0, 2) * VH) | 0; c.fillStyle = 'rgba(220,235,255,.5)'; c.fillRect(x - 1, y, 3, 1); c.fillRect(x, y - 1, 1, 1); }
    } else if (s === 'snow') {
      drops.forEach(d => {
        d.y += 0.45 * d.s * k; d.x += (Math.sin(t / 800 + d.ph) * 0.3 + wind * 0.3) * k;
        c.fillStyle = 'rgba(255,255,255,.9)'; c.fillRect(Math.round(d.x), Math.round(d.y), d.s > 1 ? 2 : 1, d.s > 1 ? 2 : 1);
        if (d.y > VH || d.x > VW + 10) Object.assign(d, newDrop(false), { x: rnd() * VW - 20 });
      });
    } else if (s === 'petals' || s === 'leaves') {
      const cols = s === 'petals' ? ['#ffc4d6', '#ffb0c8', '#ffe0ea', '#ff9ab8'] : ['#d9822b', '#c0392b', '#e0b030', '#a85a2a'];
      drops.forEach(d => {
        d.y += 0.35 * d.s * k; d.x += (Math.sin(t / 600 + d.ph) * 0.5 + 0.25) * k;
        const flip = Math.sin(t / 250 + d.ph) > 0;
        c.fillStyle = cols[d.c]; c.fillRect(Math.round(d.x), Math.round(d.y), flip ? 2 : 1, flip ? 1 : 2);
        if (s === 'leaves') c.fillRect(Math.round(d.x) + 1, Math.round(d.y) + 1, 1, 1);
        if (d.y > VH || d.x > VW + 10) Object.assign(d, newDrop(false), { x: rnd() * VW - 30 });
      });
    } else if (s === 'heat' || s === 'dust') {
      // shimmer: faint wavy light bands, plus sand blowing past
      for (let i = 0; i < 4; i++) {
        const y = ((t / 40 + i * 47) % (VH + 20)) - 10;
        c.fillStyle = 'rgba(255,240,200,.06)';
        for (let x = 0; x < VW; x += 8) c.fillRect(x, Math.round(y + Math.sin(x / 20 + t / 300) * 2), 8, 2);
      }
      drops.forEach(d => {
        d.x += (1.2 + d.s) * wind * k; d.y += Math.sin(t / 300 + d.ph) * 0.15 * k;
        c.fillStyle = s === 'dust' ? 'rgba(214,180,110,.55)' : 'rgba(232,209,138,.45)'; c.fillRect(Math.round(d.x), Math.round(d.y), 2, 1);
        if (d.x > VW + 4) { d.x = -4 - rnd() * 30; d.y = rnd() * VH; }
      });
    }
  }

  // sunset glow, dusk, or night with lit windows and a small light around the hero
  function light(c, sx, sy, hero, t) {
    const tm = sky.time;
    if (tm === 'sunset') {
      const g = c.createLinearGradient(0, 0, 0, VH);
      g.addColorStop(0, 'rgba(255,120,50,.20)'); g.addColorStop(0.5, 'rgba(255,160,70,.06)'); g.addColorStop(1, 'rgba(255,160,70,0)');
      c.fillStyle = g; c.fillRect(0, 0, VW, VH);
    } else if (tm === 'night') {
      if (!dark) { dark = document.createElement('canvas'); dark.width = VW; dark.height = VH; }
      const d = dark.getContext('2d');
      d.globalCompositeOperation = 'source-over'; d.clearRect(0, 0, VW, VH);
      d.fillStyle = 'rgba(12,18,52,.32)'; d.fillRect(0, 0, VW, VH);
      d.globalCompositeOperation = 'destination-out';
      const hole = (x, y, r, a) => { const g = d.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, `rgba(0,0,0,${a})`); g.addColorStop(1, 'rgba(0,0,0,0)'); d.fillStyle = g; d.fillRect(x - r, y - r, r * 2, r * 2); };
      if (hero) hole(hero.x + 8, hero.y + 6, 44, 0.85);
      for (let y = 0; y < SH; y++) for (let x = 0; x < SW; x++) {
        const ch = tileAt(sx * SW + x, sy * SH + y);
        if (ch === 'h' || ch === 'U' || ch === 'J' || ch === 'X' || ch === 'm') hole(x * TS + 8, y * TS + 8, 22, 0.7);
      }
      c.drawImage(dark, 0, 0);
      // warm glow on the lit windows
      c.globalCompositeOperation = 'lighter';
      for (let y = 0; y < SH; y++) for (let x = 0; x < SW; x++) {
        const ch = tileAt(sx * SW + x, sy * SH + y);
        if (ch === 'h' || ch === 'U') { const g = c.createRadialGradient(x * TS + 8, y * TS + 8, 0, x * TS + 8, y * TS + 8, 14); g.addColorStop(0, 'rgba(255,200,90,.22)'); g.addColorStop(1, 'rgba(255,200,90,0)'); c.fillStyle = g; c.fillRect(x * TS - 6, y * TS - 6, 28, 28); }
      }
      c.globalCompositeOperation = 'source-over';
    }
  }

  // the weather can change while you play (the monsoon in 6.1)
  function setSky(name) { if (sky.sky === name) return; sky.sky = name; cur = ''; drops = []; const n = { rain: 90, drizzle: 40, snow: 70, petals: 18, leaves: 14, dust: 26, heat: 14 }[name] || 0; for (let i = 0; i < n; i++) drops.push(newDrop(true)); }
  WW.fx = { setup, draw, burst, step, lift, setSky, get sky() { return sky; }, SKY };
})();
