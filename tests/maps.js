// node tests/maps.js  -> shots/maps/<id>.png : each episode's whole map with people (P), stone (S), boss (B), scraps (*), start (@)
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'); const OUT = path.join(ROOT, 'shots', 'maps'); fs.mkdirSync(OUT, { recursive: true });
const eps = fs.readdirSync(path.join(ROOT, 'game', 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort();
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  for (const f of eps) {
    const html = `<html><body style="margin:0;background:#000"><canvas id=c></canvas>
<script src="${path.join(ROOT, 'game/engine/art.js')}"></script><script src="${path.join(ROOT, 'game/engine/art2.js')}"></script><script src="${path.join(ROOT, 'game/engine/art3.js')}"></script>
<script src="${path.join(ROOT, 'game/episodes', f)}"></script>
<script>const ep=window.EPISODE;WW.style.realm=ep.realm||+ep.id[0];const m=ep.map,c=document.getElementById('c');c.width=m[0].length*16;c.height=m.length*16;const x=c.getContext('2d');x.imageSmoothingEnabled=false;
WW.drawMap(x,m,{t:0});
ep.npcs.forEach(n=>WW.drawPerson(x,n,n.x*16,n.y*16-2,0));
ep.scraps.forEach(s=>WW.sprite(x,'page',s[0]*16+1,s[1]*16+2,{}));
(ep.smudges||[]).forEach(s=>WW.sprite(x,'smudge',s[0]*16,s[1]*16,{}));
WW.sprite(x,'stone',ep.challenge.at[0]*16,ep.challenge.at[1]*16,{pal:{W:'#9aa3ad',G:'#5e636b',y:'#f2c14e',r:'#e04848',n:'#2f6fd6'}});
WW.sprite(x,'smudge',ep.boss.at[0]*16-8,ep.boss.at[1]*16-16,{scale:2});
WW.sprite(x,'hero',ep.start[0]*16,ep.start[1]*16-3,{});
x.strokeStyle='rgba(255,255,255,.35)';for(let i=16;i<m[0].length;i+=16){x.beginPath();x.moveTo(i*16,0);x.lineTo(i*16,c.height);x.stroke();}for(let j=11;j<m.length;j+=11){x.beginPath();x.moveTo(0,j*16);x.lineTo(c.width,j*16);x.stroke();}
</script></body></html>`;
    fs.writeFileSync('/tmp/mapview.html', html);
    await p.goto('file:///tmp/mapview.html'); await p.waitForTimeout(150);
    await (await p.$('#c')).screenshot({ path: path.join(OUT, f.slice(3, 6) + '.png') });
  }
  await b.close(); console.log('maps drawn', eps.length);
})();
