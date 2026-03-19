/* ═══════════════════════════════════════════════════════════════
   WAYANAD ELEGANCE 2026 — app.js
═══════════════════════════════════════════════════════════════ */

/* ── CURSOR ─────────────────────────────────────────────────── */
const CI = document.getElementById('CI');
const CO = document.getElementById('CO');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  CI.style.left = mx + 'px'; CI.style.top = my + 'px';
});
(function loop() {
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  CO.style.left = rx + 'px'; CO.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a,button,.ach,.brow,.wc,.dtab,.srl,.hb-cta,.hb1,.hb2,.ncta').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
});

/* ── NAV SCROLL ─────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('NAV').classList.toggle('stuck', window.scrollY > 60);
});

/* ── COUNTDOWN ──────────────────────────────────────────────── */
function tick() {
  const target = new Date('2026-03-27T20:00:00+05:30').getTime();
  const diff   = Math.max(0, target - Date.now());
  const pad    = n => String(Math.floor(n)).padStart(2, '0');
  document.getElementById('cd-d').textContent = pad(diff / 864e5);
  document.getElementById('cd-h').textContent = pad((diff % 864e5) / 36e5);
  document.getElementById('cd-m').textContent = pad((diff % 36e5) / 6e4);
  document.getElementById('cd-s').textContent = pad((diff % 6e4) / 1e3);
}
tick();
setInterval(tick, 1000);

/* ── DAY TABS ───────────────────────────────────────────────── */
function switchDay(id, el) {
  document.querySelectorAll('.dtab').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
  document.querySelectorAll('.dpanel').forEach(p => p.classList.remove('on'));
  document.getElementById('dp-' + id).classList.add('on');
}

/* ── ACTIVITY DATA ──────────────────────────────────────────── */
const ACTS = [
  {
    key: 'zipline', pos: 'center center',
    num: '01', actNum: 'Activity 01 / 07',
    day: 'Saturday · 12:30 PM', dayClass: 'sat', heroTag: 'The Thrill',
    img: 'images/zipline.jpg',
    name: 'Karapuzha Zipline + Glass Bridge',
    desc: 'The 605m Water-Dam Zipline at Karapuzha flies you over the reservoir at full speed — water and hills beneath, wind in your face, pure adrenaline. Harness and helmet fully provided by the zone. After the flight, walk the Glass Bridge — transparent floor suspended above the dam, a perfect walking-on-air reel. Both in the same zone, no transit. Non-zipliners get the Rose Garden and Musical Fountains simultaneously.',
    facts: [{l:'Distance',v:'605m Flight'},{l:'Safety',v:'Harness + Helmet'},{l:'Duration',v:'~1.5 hrs group'}],
    why: ['Longest dam zipline in Wayanad — the aerial view over the reservoir at full speed is unmatched','Glass Bridge = transparent floor reel — walk slowly, look straight down, the glass is real','Both attractions in the same zone — zero wasted transit, maximum time efficiency','Non-zipliners have Rose Garden for portrait content running at the exact same time'],
    maps: 'https://www.google.com/maps/search/Karapuzha+Adventure+Zone+Wayanad',
    yt:   'https://www.youtube.com/results?search_query=Karapuzha+dam+zipline+glass+bridge+Wayanad',
    srch: 'https://www.google.com/search?q=Karapuzha+Glass+Bridge+zipline+Wayanad+Kerala+booking',
    price: '~₹500', pnote: 'per person · ~₹8,000 total for 16', dur: 'Saturday 12:30 PM\n~1.5 hrs'
  },
  {
    key: 'pookode', pos: 'center top',
    num: '02', actNum: 'Activity 02 / 07',
    day: 'Saturday · 4:30 PM', dayClass: 'sat',
    img: 'images/pookode.jpg',
    name: 'Pookode Lake',
    desc: 'A natural freshwater crater lake in Vythiri, surrounded by dense Wayanad forest. Mirror-still water at golden hour reflecting the entire treeline. Pedal-boating in groups of 4 — calm, safe, completely photogenic. The bamboo forest trail around the edge is a 20-minute loop with soft afternoon light perfect for candid portraits. The deliberate aesthetic wind-down after the Karapuzha thrill.',
    facts: [{l:'Type',v:'Crater Lake'},{l:'Boats',v:'Pedal · 4 pax'},{l:'Duration',v:'~1 hr'}],
    why: ['Mirror reflection at the eastern bank — the most shared single photo from Pookode','Golden hour at 4:30 PM creates cinematic light for portraits without any effort','Bamboo forest trail — 20 min loop, soft directional light, perfect candid backdrop','Calm energy after zipline thrill — this sequence is deliberate and perfectly paced'],
    maps: 'https://www.google.com/maps/search/Pookode+Lake+Wayanad',
    yt:   'https://www.youtube.com/results?search_query=Pookode+lake+Wayanad+pedal+boat+vlog',
    srch: 'https://www.google.com/search?q=Pookode+Lake+Wayanad+timing+entry+fee',
    price: '~₹100', pnote: 'entry + pedal boats · ~₹1,600 total', dur: 'Saturday 4:30 PM\nGolden hour'
  },
  {
    key: 'banasura', pos: 'center 25%',
    num: '03', actNum: 'Activity 03 / 07',
    day: 'Saturday · 6:30 PM', dayClass: 'sat', heroTag: 'Golden Hour',
    img: 'images/banasura.jpg',
    name: 'Banasura Sagar Dam',
    desc: "Asia's largest earthen dam. Electric shuttle buggies ferry the entire squad to the summit at golden hour — the reservoir with its scattered islands spreads below, mountain ranges frame the back, amber light floods the entire scene. The group panoramic from the dam top is the trip's definitive money shot. Five minutes from Seagot Resort — the perfect pre-check-in capstone that costs almost nothing.",
    facts: [{l:'Scale',v:"Asia's Largest"},{l:'Transport',v:'Electric Buggy'},{l:'Duration',v:'~1 hr'}],
    why: ["Asia's largest earthen dam = a backdrop that makes every photo look like it was professionally planned","Golden hour timing creates a once-in-a-lifetime group panoramic — amber light over reservoir islands",'Electric buggy ride to the top is itself content — slow, elevated, fully scenic','Five minutes from Seagot Resort — zero transit cost or time, seamless pre-check-in timing'],
    maps: 'https://www.google.com/maps/search/Banasura+Sagar+Dam+Wayanad',
    yt:   'https://www.youtube.com/results?search_query=Banasura+Sagar+dam+sunset+electric+buggy+Wayanad',
    srch: 'https://www.google.com/search?q=Banasura+Sagar+Dam+Wayanad+electric+buggy+timings',
    price: '~₹150', pnote: 'buggy + entry · ~₹2,400 total', dur: 'Saturday 6:30 PM\nNear resort'
  },
  {
    key: 'resort', pos: 'center center',
    num: '04', actNum: 'Activity 04 / 07',
    day: 'Saturday Night', dayClass: 'night', heroTag: 'Basecamp Alpha',
    img: 'images/resort.jpg',
    name: 'Seagot Banasura Resort',
    desc: "The resort overlooks the Banasura Sagar reservoir. Check-in, bags down, straight to the pool in Villa Vibes outfits. 9:30 PM: late-night BBQ at poolside, bonfire under the open sky, dinner with the reservoir breeze. The whole squad in one place — no one splitting off, no one missing the moment. This is the social centrepiece of the trip. The night that defines the group chat forever.",
    facts: [{l:'Rate',v:'₹1,600/person'},{l:'Includes',v:'Breakfast'},{l:'Night Plan',v:'Pool+BBQ+Bonfire'}],
    why: ['Reservoir-facing property — waking up to that aerial view at 5 AM Sunday exit is genuinely surreal','Late-night BBQ + bonfire is the peak social moment of the entire trip — the campfire story night','Private pool — Villa Vibes outfit change makes the pool session into a full-blown event','Breakfast included — zero scrambling on the 5 AM Sunday early checkout'],
    maps: 'https://www.google.com/maps/search/Seagot+Banasura+Resort+Wayanad',
    yt:   'https://www.youtube.com/results?search_query=Seagot+Banasura+resort+Wayanad+pool+review',
    srch: 'https://www.google.com/search?q=Seagot+Banasura+Resort+Wayanad+pool+bonfire+review',
    price: '₹1,600', pnote: 'per person incl. breakfast · ₹25,600 total', dur: '1 Night Stay\nPool + BBQ + Bonfire'
  },
  {
    key: 'chembra', pos: 'center center',
    num: '05', actNum: 'Activity 05 / 07',
    day: 'Sunday · 6:30 AM', dayClass: 'sun', heroTag: 'The Hero Moment',
    img: 'images/chembra.jpg',
    name: 'Chembra Peak — Heart-Shaped Lake',
    desc: "Wayanad's crown jewel. 2,100m above sea level. The Hridayathadakam — a naturally heart-shaped lake that has never dried in recorded history, not in any drought year, not ever. 40% of the squad: the full 3.5km steep hike through tea plantations, forest, and mountain meadows. 60% of the squad: the 15-minute Watchtower walk with panoramic valley views that are equally staggering. Only 200 trekkers per day. Pre-book tonight — not tomorrow, tonight.",
    facts: [{l:'Altitude',v:'2,100m ASL'},{l:'Daily Cap',v:'200 only'},{l:'Trek Time',v:'~3.5 hrs RT'}],
    why: ['Heart-shaped lake = the single most photographed, most shared moment in all of Wayanad','The lake has NEVER dried in recorded history — not in any drought year, ever, this is documented','6 AM arrival means the peaks are in mist — conditions that burn off by 8 AM, we get them exclusively','Watchtower option means every single squad member gets the panoramic valley view — nobody is excluded','200/day cap = exclusive by design — most visitors who show up without booking are turned away'],
    maps: 'https://www.google.com/maps/search/Chembra+Peak+Meppadi+Wayanad',
    yt:   'https://www.youtube.com/results?search_query=Chembra+peak+heart+lake+trek+Wayanad+vlog',
    srch: 'https://www.google.com/search?q=Chembra+Peak+Wayanad+online+booking+200+limit',
    price: '₹150', pnote: 'per person · ₹2,400 total · Pre-Book Mandatory', dur: 'Sunday 6:30 AM\n200/day — book tonight'
  },
  {
    key: 'kanthanpara', pos: 'center center',
    num: '06', actNum: 'Activity 06 / 07',
    day: 'Sunday · 12:30 PM', dayClass: 'sun', heroTag: 'Hidden Gem',
    img: 'images/kanthanpara.jpg',
    name: 'Kanthanpara Waterfalls',
    desc: 'A wide, beautiful waterfall hidden inside the tea gardens near Meppadi. Two-tier cascade falling through bamboo and forest. Safe paved access path all the way to the viewing platform, optional dip at the base pool. Far less crowded than Soochipara or Meenmutty. The path through the estate to reach the falls is nearly as beautiful as the falls itself — green tea rows, bamboo corridors, the sound of water before you see it. Perfect post-Chembra recovery.',
    facts: [{l:'Access',v:'Paved Path'},{l:'Crowds',v:'Very Low'},{l:'Timings',v:'9 AM–4:30 PM'}],
    why: ['Tea garden backdrop = the most cinematic waterfall setting anywhere in Wayanad, period','Far less crowded than the famous falls — you practically have the whole place to yourselves','Safe paved access throughout — every single squad member reaches the viewpoint without difficulty','After Chembra\'s physical demand, this is the perfect beautiful and calm recovery stop'],
    maps: 'https://www.google.com/maps/search/Kanthanpara+Waterfalls+Meppadi+Wayanad',
    yt:   'https://www.youtube.com/results?search_query=Kanthanpara+waterfalls+Wayanad+hidden+gem+vlog',
    srch: 'https://www.google.com/search?q=Kanthanpara+Waterfalls+Wayanad+entry+fee+timings',
    price: '₹40', pnote: 'per person · ₹640 total · 9 AM–4:30 PM', dur: 'Sunday 12:30 PM\n~1 hr'
  },
  {
    key: 'edakkal', pos: 'center center',
    num: '07', actNum: 'Activity 07 / 07',
    day: 'Sunday · 2:30 PM', dayClass: 'sun', heroTag: 'Cultural Closer',
    img: 'images/edakkal.jpg',
    name: 'Edakkal Caves',
    desc: 'A natural cave cleft in the Ambukuthi hills containing Neolithic and Mesolithic rock engravings. Human figures, animals, spirals, and geometric symbols carved by ancient hands over 6,000 years ago. 45-minute climb with proper stairs and handrails throughout — fully accessible. Inside the cave, the cleft opens dramatically with light filtering from above. Feels like Indiana Jones. Nothing else on this trip is in the same category for sheer uniqueness.',
    facts: [{l:'Age',v:'6,000+ Years'},{l:'Climb',v:'45 min · Stairs'},{l:'Timings',v:'9 AM–5 PM'}],
    why: ['6,000-year-old Neolithic carvings — nothing on the trip is even close for uniqueness and wow factor','Dramatic cave cleft with natural directional light — incredible photography inside the cave itself','Stairs and handrails throughout the entire climb — every squad member reaches the carvings comfortably','Closes the weekend on a deep cultural note — you have seen nature AND history in one 2-day trip'],
    maps: 'https://www.google.com/maps/search/Edakkal+Caves+Wayanad',
    yt:   'https://www.youtube.com/results?search_query=Edakkal+caves+Wayanad+ancient+carvings+vlog',
    srch: 'https://www.google.com/search?q=Edakkal+Caves+Wayanad+6000+year+old+carvings',
    price: '₹25', pnote: 'per person · ₹400 total · Open till 5 PM', dur: 'Sunday 2:30 PM\n~1.5 hrs total'
  }
];

/* ── BUILD CHIPS ────────────────────────────────────────────── */
const CC = document.getElementById('CHIPS');
ACTS.forEach((a, i) => {
  const bc = a.dayClass === 'sat' ? 'sat' : a.dayClass === 'sun' ? 'sun' : 'hero';
  const badge = a.heroTag
    ? `<span class="ach-badge hero">${a.heroTag}</span>`
    : `<span class="ach-badge ${bc}">${a.day}</span>`;
  CC.innerHTML += `
    <div class="ach" id="ach-${a.key}" onclick="showAct(${i}, this)">
      <div class="ach-num">${a.num}</div>
      <div class="ach-info">
        <div class="ach-day">${a.day}</div>
        <div class="ach-name">${a.name.split('—')[0].split('–')[0].trim()}</div>
        ${badge}
      </div>
      <div class="ach-arr">↗</div>
    </div>`;
});

/* ── BUILD PROGRESS DOTS ────────────────────────────────────── */
const AP = document.getElementById('aprog');
ACTS.forEach((_, i) => AP.innerHTML += `<div class="apd" id="apd-${i}"></div>`);

/* ── SHOW ACTIVITY ──────────────────────────────────────────── */
let curAct = -1;

function showAct(idx, el) {
  const a = ACTS[idx];
  curAct = idx;

  document.querySelectorAll('.ach').forEach(c => c.classList.remove('sel'));
  (el || document.getElementById('ach-' + a.key)).classList.add('sel');

  const hint = document.getElementById('ACT-HINT');
  if (hint) hint.style.opacity = '0';

  const imgEl = document.getElementById('sl-img');
  imgEl.src = a.img;
  imgEl.alt = a.name;
  imgEl.style.objectPosition = a.pos || 'center center';

  document.getElementById('sl-bignum').textContent = '0' + a.num;
  const db = document.getElementById('sl-dbadge');
  db.className = 'sl-dbadge ' + a.dayClass;
  db.textContent = a.day;

  const ht = document.getElementById('sl-htag');
  if (a.heroTag) { ht.style.display = ''; ht.textContent = a.heroTag; }
  else { ht.style.display = 'none'; }

  document.getElementById('sr-num').textContent  = a.actNum;
  document.getElementById('sr-name').textContent = a.name;
  document.getElementById('sr-desc').textContent = a.desc;

  document.getElementById('sr-facts').innerHTML = a.facts
    .map(f => `<div class="srf"><div class="srf-l">${f.l}</div><div class="srf-v">${f.v}</div></div>`)
    .join('');

  document.getElementById('sr-why').innerHTML = a.why
    .map(w => `<div class="srw">${w}</div>`)
    .join('');

  document.getElementById('sr-links').innerHTML = `
    <a class="srl maps" href="${a.maps}" target="_blank">📍 Google Maps</a>
    <a class="srl yt"   href="${a.yt}"   target="_blank">▶ YouTube</a>
    <a class="srl srch" href="${a.srch}" target="_blank">🔍 More Info</a>`;

  document.getElementById('sr-price').textContent = a.price;
  document.getElementById('sr-pnote').textContent = a.pnote;
  document.getElementById('sr-dur').innerHTML     = a.dur.replace('\n', '<br>');

  document.querySelectorAll('.apd').forEach((d, i) => d.classList.toggle('on', i === idx));
  document.getElementById('btn-prev').disabled = idx === 0;
  document.getElementById('btn-next').disabled = idx === ACTS.length - 1;

  const stage = document.getElementById('act-stage');
  stage.classList.remove('show');
  void stage.offsetWidth; // force reflow
  stage.classList.add('show');

  // Re-attach hover for new links
  document.querySelectorAll('.srl').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
  });

  // Scroll into view if needed
  setTimeout(() => {
    const r = stage.getBoundingClientRect();
    if (r.top < 80) stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 60);
}

function navAct(dir) {
  if (curAct + dir >= 0 && curAct + dir < ACTS.length) showAct(curAct + dir);
}

/* ── SCROLL REVEAL ──────────────────────────────────────────── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.04, rootMargin: '0px 0px 0px 0px' });

document.querySelectorAll('.rv,.rv2,.rv3').forEach(el => obs.observe(el));

// Fallback: force-reveal everything after 2s in case observer doesn't fire
setTimeout(() => {
  document.querySelectorAll('.rv,.rv2,.rv3').forEach(el => el.classList.add('on'));
}, 2000);
