/* WORLDWALKER engine · the Grump's helpers: the bad guys that roam each map (1 to 3 per map)
   An episode lists them in smudges: [[x, y], [x, y, 'bat'], ...]. Without a type, the realm picks a fitting mix.
     grump  Grumpling   – wanders, and sometimes flies into a rage and charges (1 star)
     bat    Ink Bat     – fast and twitchy, flies over water, trees and rocks (1 star)
     blob   Mud Blob    – slow but stubborn: it takes 2 stars
     whirl  Dust Devil  – zooms in straight lines and bounces off walls (1 star) */
(function () {
  const { SPR } = WW;
  WW.FOES = {
    grump: { hp: 1, ms: 650, fly: false, name: { en: 'Grumpling', es: 'Gruñoncito', fa: 'غرغروی کوچک' } },
    bat: { hp: 1, ms: 230, fly: true, name: { en: 'Ink Bat', es: 'Murciélago de Tinta', fa: 'شب‌پرهٔ رنگ' } },
    blob: { hp: 2, ms: 1050, fly: false, name: { en: 'Mud Blob', es: 'Bola de Lodo', fa: 'گلولهٔ گِل' } },
    whirl: { hp: 1, ms: 170, fly: false, name: { en: 'Dust Devil', es: 'Remolino de Polvo', fa: 'گردباد خاک' } }
  };
  // which helpers live in each realm (the first spot on every map is always a Grumpling)
  WW.REALM_FOES = { 1: ['bat', 'blob'], 2: ['bat', 'whirl'], 3: ['whirl', 'bat'], 4: ['whirl', 'blob'], 5: ['whirl', 'bat'], 6: ['blob', 'bat'], 7: ['bat', 'whirl'], 8: ['blob', 'whirl'] };
  WW.foeType = (ep, i) => {
    const s = (ep.smudges || [])[i] || [];
    if (s[2] && WW.FOES[s[2]]) return s[2];
    if (i === 0) return 'grump';
    const list = WW.REALM_FOES[ep.realm || +String(ep.id)[0]] || ['bat', 'blob'];
    return list[(i - 1) % list.length];
  };

  SPR.bat = [ // wings up
    '................', '................', 'kk............kk', 'kGk..........kGk', 'kGGk..k..k..kGGk', 'kGGGkkgkkgkkGGGk',
    '.kGGGggggggGGGk.', '..kGgEeggeEgGk..', '...kggggggggk...', '....kgmtmtgk....', '.....kggggk.....', '......kkkk......',
    '................', '................', '................', '................'];
  SPR.batDown = [ // wings down
    '................', '................', '................', '................', '......k..k......', '.....kgkkgk.....',
    '....kggggggk....', '...kgEeggeEgk...', '..kGggggggggGk..', '.kGGkmtmtmkGGk..', 'kGGk.kggggk.kGGk', 'kGk...kkkk...kGk',
    'kk............kk', '................', '................', '................'];
  SPR.blob = [
    '................', '................', '................', '................', '......kkkk......', '....kkggggkk....',
    '...kggggggggk...', '..kgggEgggEggk..', '..kggEegggeEgk..', '.kggggggggggggk.', '.kgggmmmmmmgggk.', '.kggggggggggggk.',
    'kGgggggggggggGGk', 'kGGGgggggggGGGGk', '.kkkkkkkkkkkkkk.', '................'];
  SPR.whirl = [
    '................', '..kkkkkkkkkkkk..', '.kggggggggggggk.', '..kGGGGGGGGGGk..', '...kggggggggk...', '....kgEggEgk....',
    '....kGGGGGGk....', '.....kggggk.....', '.....kGmmGk.....', '......kggk......', '......kGGk......', '.......kk.......',
    '......k.........', '.......k........', '................', '................'];
  // colors for each helper
  WW.FOE_PAL = {
    grump: null,
    bat: { g: '#4a3a6e', G: '#2a1f45', E: '#ffe08a', e: '#ff3b2f', m: '#170c22', t: '#f4efe0' },
    blob: { g: '#6fae2a', G: '#3f6e16', E: '#ffffff', e: '#d4153a', m: '#1c3008' }, // a bright green slime
    whirl: { g: '#e2683a', G: '#9e3418', E: '#ffffff', e: '#2b0d06', m: '#4a1404' }  // a red-orange dust devil
  };
  // draw one helper on the map
  WW.drawFoe = (c, e, x, y, t, rage) => {
    const pal = Object.assign({}, WW.FOE_PAL[e.type] || {}, rage ? { g: '#a8323a', G: '#6e1c24', e: '#fff070' } : {}, e.hurtT && t - e.hurtT < 200 ? { g: '#ffffff', G: '#dddddd' } : {});
    if (e.type === 'bat') {
      const up = Math.floor(t / 110 + e.phase) % 2;
      WW.shadow(c, x, y + 15, 6);
      WW.sprite(c, up ? 'bat' : 'batDown', x, y - 4 + Math.round(Math.sin(t / 160 + e.phase) * 2), { pal });
    } else if (e.type === 'blob') {
      const sq = Math.round(Math.sin(t / 300 + e.phase));
      WW.shadow(c, x, y + 14, 12);
      if (e.hp < WW.FOES.blob.hp) { c.save(); c.translate(x + 8, y + 16); c.scale(0.8, 0.8); WW.sprite(c, 'blob', -8, -16 + sq, { pal }); c.restore(); }
      else WW.sprite(c, 'blob', x, y + sq, { pal });
    } else if (e.type === 'whirl') {
      const j = Math.round(Math.sin(t / 40) * 1.5);
      WW.shadow(c, x, y + 14, 6);
      WW.sprite(c, 'whirl', x + j, y, { pal, flip: Math.floor(t / 90) % 2 === 1 });
    } else {
      WW.shadow(c, x, y + 13, 8);
      WW.sprite(c, 'smudge', x, y, { bob: true, t, phase: e.phase, pal: rage ? { g: '#a8323a', G: '#6e1c24', e: '#fff070' } : (e.hurtT && t - e.hurtT < 200 ? { g: '#ffffff' } : null) });
    }
  };
})();
