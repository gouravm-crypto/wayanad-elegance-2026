/* HERO ANIMATION FALLBACK */
// Ensure hero elements are always visible even if CSS animations fail
setTimeout(()=>{
  document.querySelectorAll('.ht-line,.h-kicker,.h-divider,.h-sub,.h-btns,.h-cd,.h-scroll').forEach(el=>{
    el.style.opacity='1';
    el.style.transform='none';
  });
},1500);
// Also trigger immediately on load
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.querySelectorAll('.ht-line,.h-kicker,.h-divider,.h-sub,.h-btns,.h-cd').forEach(el=>{
      el.style.opacity='1';
      el.style.transform='none';
    });
  },800);
});

/* ================================================================
   WAYANAD ELEGANCE 2026 — app.js  (Final Plan v5.0)
================================================================ */

/* CURSOR */
const CI=document.getElementById('CI'),CO=document.getElementById('CO');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;CI.style.left=mx+'px';CI.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;CO.style.left=rx+'px';CO.style.top=ry+'px';requestAnimationFrame(loop);})();
document.querySelectorAll('a,button,.ach,.brow,.wc,.dtab,.srl,.hb-cta,.hb1,.hb2,.ncta,.booking-card,.bk-contact,.sitem,.tt-spec').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('hov'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('hov'));
});

/* NAV */
window.addEventListener('scroll',()=>document.getElementById('NAV').classList.toggle('stuck',scrollY>60));

/* COUNTDOWN */
function tick(){
  const t=new Date('2026-03-27T20:00:00+05:30').getTime();
  const d=Math.max(0,t-Date.now());
  const p=n=>String(Math.floor(n)).padStart(2,'0');
  document.getElementById('cd-d').textContent=p(d/864e5);
  document.getElementById('cd-h').textContent=p((d%864e5)/36e5);
  document.getElementById('cd-m').textContent=p((d%36e5)/6e4);
  document.getElementById('cd-s').textContent=p((d%6e4)/1e3);
}
tick();setInterval(tick,1000);

/* DAY TABS */
function switchDay(id,el){
  document.querySelectorAll('.dtab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  document.querySelectorAll('.dpanel').forEach(p=>p.classList.remove('on'));
  document.getElementById('dp-'+id).classList.add('on');
}

/* ── ACTIVITY DATA (Final Plan v5.0) ─────────────────────────── */
const ACTS=[
  {
    key:'lakkidi', pos:'center center',
    num:'01', actNum:'Activity 01 / 10',
    day:'Friday · 5:15 AM', dayClass:'sat',
    img:'images/chembra_bg.jpg',
    name:'Lakkidi Viewpoint — Sunrise on Ghats',
    desc:'Thamarassery Churam at 5:15 AM — 12 hairpin bends where the Western Ghats crack open and clouds sit below you. The mist is thick, the light is gold, and this is the very first group photo of the trip. 45 minutes. Free. The mist burns off by 7 AM so this exact window is everything.',
    facts:[{l:'Entry',v:'Free'},{l:'Duration',v:'45 min'},{l:'Timing',v:'5:15 AM'}],
    why:['Mist at 5:15 AM is the golden window — burns off completely by 7 AM','The trip's opening photo — everyone fresh, misty ghats behind, first light','Bookend stop — you pass Lakkidi both ways, different mood each time'],
    maps:'https://www.google.com/maps/search/Lakkidi+Viewpoint+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Lakkidi+viewpoint+sunrise+Wayanad+ghats',
    srch:'https://www.google.com/search?q=Lakkidi+Thamarassery+Churam+viewpoint+Wayanad',
    price:'Free', pnote:'no entry · scenic stop', dur:'Friday 5:15 AM\n45 min'
  },
  {
    key:'edakkal', pos:'center center',
    num:'02', actNum:'Activity 02 / 10',
    day:'Saturday · 10:30 AM', dayClass:'sat', heroTag:'Cultural Opener',
    img:'images/edakkal.jpg',
    name:'Edakkal Caves — 6,000-Year-Old Carvings',
    desc:'A natural cave cleft in the Ambukuthi hills. Neolithic rock engravings — human figures, animals, spirals carved 6,000 years ago. 45-minute climb with stairs and handrails throughout. Placed FIRST on Saturday because it is the furthest point (44km from resort) — smart routing means zero backtracking all day. Natural light shaft inside makes the photography incredible.',
    facts:[{l:'Age',v:'6,000+ Years'},{l:'Distance',v:'44km from resort'},{l:'Duration',v:'~1.5 hrs'}],
    why:['Furthest point on Saturday — done first so the whole day routes back efficiently','6,000-year-old Neolithic carvings — nothing else on the trip compares for uniqueness','Natural light shaft inside the cave cleft = extraordinary photography','Stairs + handrails throughout — every person in the group reaches the carvings'],
    maps:'https://www.google.com/maps/search/Edakkal+Caves+Sulthan+Bathery+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Edakkal+caves+Wayanad+prehistoric+carvings',
    srch:'https://www.google.com/search?q=Edakkal+Caves+Wayanad+6000+year+old+carvings',
    price:'₹800', pnote:'group entry × 16 · Saturday 10:30 AM', dur:'Saturday 10:30 AM\n~1.5 hrs'
  },
  {
    key:'phantom', pos:'center center',
    num:'03', actNum:'Activity 03 / 10',
    day:'Saturday · 12:00 PM', dayClass:'sat',
    img:'images/chembra_bg.jpg',
    name:'Phantom Rock — Skull Formation',
    desc:'A giant rock that looks unmistakably like a human skull — panoramic valley views from the base. Only 5km from Edakkal, perfectly on the route back. Free entry, ₹20 parking. 30 minutes. The kind of stop that photos extremely well and takes no planning whatsoever.',
    facts:[{l:'Entry',v:'Free'},{l:'Distance',v:'5km from Edakkal'},{l:'Duration',v:'30 min'}],
    why:['5km from Edakkal — literally on the route back, zero detour','Free entry — the easiest yes on the itinerary','Skull-shaped rock = one of those photos everyone posts immediately'],
    maps:'https://www.google.com/maps/search/Phantom+Rock+Ambalavayal+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Phantom+Rock+Ambalavayal+Wayanad+skull',
    srch:'https://www.google.com/search?q=Phantom+Rock+Ambalavayal+Wayanad',
    price:'Free', pnote:'₹20 parking only · on route from Edakkal', dur:'Saturday 12:00 PM\n30 min'
  },
  {
    key:'zipline', pos:'center center',
    num:'04', actNum:'Activity 04 / 10',
    day:'Saturday · 12:30 PM', dayClass:'sat', heroTag:'The Thrill',
    img:'images/zipline.jpg',
    name:'Karapuzha Zipline + ATV',
    desc:"Kerala's longest 605m zipline over the Karapuzha dam reservoir — you fly at full speed with aerial views of Chembra Peak in the distance. After the zipline: ATV through rubber and pepper plantations. Both in the same zone, 7km from Phantom Rock. Pre-booked for 12:30 PM Saturday. Harness and helmet provided. Open till 6 PM.",
    facts:[{l:'Zipline',v:'605m · Kerala\'s Longest'},{l:'Also',v:'ATV Riding'},{l:'Duration',v:'~1.5 hrs'}],
    why:["Kerala's longest dam zipline — aerial views of Chembra Peak during the flight",'ATV through rubber + pepper plantations — completely different terrain from the trek','7km from Phantom Rock — same cluster, same direction, zero wasted driving','Pre-booked slot means 16 people walk straight in at 12:30 PM Saturday'],
    maps:'https://www.google.com/maps/search/Karapuzha+Adventure+Park+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Karapuzha+605m+zipline+ATV+Wayanad',
    srch:'https://www.google.com/search?q=Karapuzha+Adventure+Park+zipline+ATV+Wayanad+booking',
    price:'~₹11,840', pnote:'group · zipline + ATV · pre-booked 12:30 PM Sat', dur:'Saturday 12:30 PM\n~1.5 hrs'
  },
  {
    key:'banasura', pos:'center 25%',
    num:'05', actNum:'Activity 05 / 10',
    day:'Saturday · 5:45 PM', dayClass:'sat', heroTag:'Golden Hour',
    img:'images/banasura.jpg',
    name:'Banasura Sagar Dam — Electric Buggy Sunset',
    desc:"Asia's largest earthen dam, 5 minutes from Seagot Resort. Electric buggies carry the squad to the summit at golden hour — the reservoir with its scattered islands spread below, mountain ranges behind, amber light flooding the scene. The group panoramic from the dam top is the trip's widest money shot. ₹150/person.",
    facts:[{l:'Scale',v:"Asia's Largest"},{l:'Buggy',v:'₹150/person'},{l:'Drive',v:'5 min from resort'}],
    why:["Asia's largest earthen dam = genuinely monumental backdrop",'Electric buggy to the top at golden hour — maximum elevation, minimum effort','5 min from resort — seamless evening, no transit stress','Group panoramic from the dam top is one of the best wide-angle shots of the trip'],
    maps:'https://www.google.com/maps/search/Banasura+Sagar+Dam+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Banasura+Sagar+dam+sunset+electric+buggy+Wayanad',
    srch:'https://www.google.com/search?q=Banasura+Sagar+Dam+electric+buggy+timings',
    price:'₹2,400', pnote:'₹150/person × 16 · golden hour · Sat 5:45 PM', dur:'Saturday 5:45 PM\n~1 hr'
  },
  {
    key:'resort', pos:'center center',
    num:'06', actNum:'Activity 06 / 10',
    day:'Saturday Night', dayClass:'night', heroTag:'Basecamp',
    img:'images/resort.jpg',
    name:'Seagot Banasura Resorts',
    desc:'Early check-in confirmed at 6:30 AM Saturday — hot shower and resort breakfast after the overnight TT journey, then 3.5 hours rest before the day begins. Check-in again at 4 PM after activities. Bonfire after dinner at 7 PM. The entire group in one place. Sleep by 11 PM — gives 6 hours before the 5 AM Chembra wake-up. Pool and fishing activity available.',
    facts:[{l:'Check-in',v:'6:30 AM Early'},{l:'Rate',v:'₹1,600/person'},{l:'Includes',v:'Breakfast'}],
    why:['Early check-in at 6:30 AM = hot shower and rest after overnight TT before Saturday activities start','₹1,600/person including breakfast is exceptional value for a reservoir-facing resort','Bonfire + team dinner at 7 PM is the social peak of the trip','11 PM sleep gives exactly 6 hours before 5 AM Chembra wake-up — optimised'],
    maps:'https://www.google.com/maps/search/Seagot+Banasura+Resorts+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Seagot+Banasura+resort+Wayanad+pool+review',
    srch:'https://www.google.com/search?q=Seagot+Banasura+Resorts+Wayanad+review',
    price:'₹25,600', pnote:'₹1,600/person × 16 · breakfast incl. · CONFIRMED', dur:'Early check-in 6:30 AM\nBonfire · Sleep 11 PM'
  },
  {
    key:'chembra', pos:'center center',
    num:'07', actNum:'Activity 07 / 10',
    day:'Sunday · 7:00 AM', dayClass:'sun', heroTag:'The Hero Moment',
    img:'images/chembra.jpg',
    name:'Chembra Peak — Heart-Shaped Lake Trek',
    desc:'Wayanad\'s crown jewel. 2,100m above sea level. The Hridayathadakam — a naturally heart-shaped lake that has never dried in recorded history, not in any drought year, ever. 7km round trip, ~4 hours. Queue at ticket counter by 6:15 AM — counter opens 7 AM, only 200 slots per day. Steel water bottles mandatory. Most photographed moment in all of Wayanad.',
    facts:[{l:'Altitude',v:'2,100m ASL'},{l:'Daily Cap',v:'200 only'},{l:'Trek',v:'7km · ~4 hrs'}],
    why:['Heart-shaped lake = most photographed, most shared moment in all of Wayanad','Never dried in recorded history — geologically and visually extraordinary','Queue by 6:15 AM — counter opens 7 AM, only 200 slots, positioned strategically on Sunday','Sunday placement means Saturday rest day, proper sleep before the biggest physical effort'],
    maps:'https://www.google.com/maps/search/Chembra+Peak+Meppadi+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Chembra+peak+heart+lake+trek+Wayanad+vlog',
    srch:'https://www.google.com/search?q=Chembra+Peak+Wayanad+forest+office+booking+200+slots',
    price:'~₹3,186', pnote:'group entry · verify pricing on call · +91 94958 80821', dur:'Sunday 7:00 AM\n7km · ~4 hrs'
  },
  {
    key:'kandi', pos:'center center',
    num:'08', actNum:'Activity 08 / 10',
    day:'Sunday · 11:30 AM', dayClass:'sun', heroTag:'Pure Offroad',
    img:'images/bridge.jpg',
    name:'900 Kandi Offroad Jeep + Glass Bridge',
    desc:'18km from Chembra — same Meppadi area, zero wasted driving. 4x4 open-top jeeps through rocky trails, steep climbs, and dense Wayanad forest — pure offroad adrenaline after the morning trek. Glass bridge 100 feet above the valley with Chembra Peak visible directly behind you. Archery and rifle shooting inside the park. 3 jeeps for 16 people. ₹3,600 total.',
    facts:[{l:'Jeeps',v:'3 × 4x4 Offroad'},{l:'Bridge',v:'Glass · 100ft high'},{l:'Duration',v:'~1.5 hrs'}],
    why:['18km from Chembra — same cluster, perfect back-to-back with the morning trek','4x4 offroad jeeps through dense forest = completely different energy from the trek','Glass bridge with Chembra Peak visible behind you = the best single-frame photo of Sunday','Archery + rifle shooting as bonus activities inside the same park'],
    maps:'https://www.google.com/maps/search/900+Kandi+offroad+jeep+safari+Wayanad',
    yt:'https://www.youtube.com/results?search_query=900+Kandi+offroad+jeep+glass+bridge+Wayanad',
    srch:'https://www.google.com/search?q=900+Kandi+jeep+safari+glass+bridge+Meppadi+Wayanad',
    price:'₹3,600', pnote:'3 jeeps for 16 · offroad + glass bridge · Sun 11:30 AM', dur:'Sunday 11:30 AM\n~1.5 hrs'
  },
  {
    key:'kanthanpara', pos:'center center',
    num:'09', actNum:'Activity 09 / 10',
    day:'Sunday · Optional', dayClass:'sun',
    img:'images/kanthanpara.jpg',
    name:'Kanthanpara Falls — View from Banks',
    desc:'A wide waterfall hidden in the tea gardens near Meppadi. View from the banks only. 20 minutes, free. The tea estate path to the viewpoint is beautiful. This is the optional Sunday stop — include it if the day is running smoothly, drop it without regret if 900 Kandi runs long or the team wants more buffer time in Kalpetta.',
    facts:[{l:'Entry',v:'Free'},{l:'Duration',v:'20 min max'},{l:'Status',v:'Optional'}],
    why:['Free + on route = no downside if time allows','Tea garden backdrop makes for the most cinematic waterfall photo in Wayanad','Genuinely optional — the plan works perfectly without it','View from banks only — respects the no-water-activities constraint'],
    maps:'https://www.google.com/maps/search/Kanthanpara+Waterfalls+Meppadi+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Kanthanpara+waterfalls+Wayanad+tea+garden',
    srch:'https://www.google.com/search?q=Kanthanpara+Waterfalls+Wayanad',
    price:'Free', pnote:'view from banks · optional stop', dur:'Sunday · if time allows\n20 min max'
  },
  {
    key:'lakkidi2', pos:'center center',
    num:'10', actNum:'Activity 10 / 10',
    day:'Sunday · 6:10 PM', dayClass:'sun',
    img:'images/chembra_bg.jpg',
    name:'Lakkidi Return — Golden Evening Bookend',
    desc:'The same Lakkidi Viewpoint from Friday 5:15 AM — but now it is 6:10 PM on Sunday and the light is completely different. A 10-minute stop on the way out. The trip\'s bookend. The photo you take here will look and feel nothing like the one at dawn on Friday. That is the point.',
    facts:[{l:'Entry',v:'Free'},{l:'Duration',v:'10 min'},{l:'Mood',v:'Golden Evening'}],
    why:['Perfect bookend — same viewpoint, opposite light, different people (you\'ve been through the trip now)','10 minutes, free, zero effort — the definition of zero downside','The contrast between 5:15 AM Friday mist and 6:10 PM Sunday golden light is the trip in one frame'],
    maps:'https://www.google.com/maps/search/Lakkidi+Viewpoint+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Lakkidi+viewpoint+Wayanad+sunset',
    srch:'https://www.google.com/search?q=Lakkidi+Thamarassery+Churam+Wayanad',
    price:'Free', pnote:'bookend stop · 10 min · on route home', dur:'Sunday 6:10 PM\n10 min'
  }
];

/* BUILD CHIPS */
const CC=document.getElementById('CHIPS');
ACTS.forEach((a,i)=>{
  const bc=a.dayClass==='sat'?'sat':a.dayClass==='sun'?'sun':'hero';
  const badge=a.heroTag
    ?`<span class="ach-badge hero">${a.heroTag}</span>`
    :`<span class="ach-badge ${bc}">${a.day}</span>`;
  CC.innerHTML+=`<div class="ach" id="ach-${a.key}" onclick="showAct(${i},this)">
    <div class="ach-num">${a.num}</div>
    <div class="ach-info"><div class="ach-day">${a.day}</div>
    <div class="ach-name">${a.name.split('—')[0].split('–')[0].trim()}</div>${badge}</div>
    <div class="ach-arr">↗</div></div>`;
});

/* PROGRESS DOTS */
const AP=document.getElementById('aprog');
ACTS.forEach((_,i)=>AP.innerHTML+=`<div class="apd" id="apd-${i}"></div>`);

/* SHOW ACTIVITY */
let curAct=-1;
function showAct(idx,el){
  const a=ACTS[idx]; curAct=idx;
  document.querySelectorAll('.ach').forEach(c=>c.classList.remove('sel'));
  (el||document.getElementById('ach-'+a.key)).classList.add('sel');
  const hint=document.getElementById('ACT-HINT');
  if(hint) hint.style.opacity='0';
  const imgEl=document.getElementById('sl-img');
  imgEl.src=a.img; imgEl.alt=a.name; imgEl.style.objectPosition=a.pos||'center';
  document.getElementById('sl-bignum').textContent='0'+a.num;
  const db=document.getElementById('sl-dbadge');
  db.className='sl-dbadge '+a.dayClass; db.textContent=a.day;
  const ht=document.getElementById('sl-htag');
  if(a.heroTag){ht.style.display='';ht.textContent=a.heroTag;}else{ht.style.display='none';}
  document.getElementById('sr-num').textContent=a.actNum;
  document.getElementById('sr-name').textContent=a.name;
  document.getElementById('sr-desc').textContent=a.desc;
  document.getElementById('sr-facts').innerHTML=a.facts.map(f=>`<div class="srf"><div class="srf-l">${f.l}</div><div class="srf-v">${f.v}</div></div>`).join('');
  document.getElementById('sr-why').innerHTML=a.why.map(w=>`<div class="srw">${w}</div>`).join('');
  document.getElementById('sr-links').innerHTML=`
    <a class="srl maps" href="${a.maps}" target="_blank">📍 Google Maps</a>
    <a class="srl yt" href="${a.yt}" target="_blank">▶ YouTube</a>
    <a class="srl srch" href="${a.srch}" target="_blank">🔍 More Info</a>`;
  document.getElementById('sr-price').textContent=a.price;
  document.getElementById('sr-pnote').textContent=a.pnote;
  document.getElementById('sr-dur').innerHTML=a.dur.replace('\n','<br>');
  document.querySelectorAll('.apd').forEach((d,i)=>d.classList.toggle('on',i===idx));
  document.getElementById('btn-prev').disabled=idx===0;
  document.getElementById('btn-next').disabled=idx===ACTS.length-1;
  const stage=document.getElementById('act-stage');
  stage.classList.remove('show'); void stage.offsetWidth; stage.classList.add('show');
  document.querySelectorAll('.srl').forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('hov'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('hov'));
  });
  setTimeout(()=>{const r=stage.getBoundingClientRect();if(r.top<80)stage.scrollIntoView({behavior:'smooth',block:'nearest'});},60);
}
function navAct(d){if(curAct+d>=0&&curAct+d<ACTS.length)showAct(curAct+d);}

/* SCROLL REVEAL */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on');});
},{threshold:.04});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
setTimeout(()=>{document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>el.classList.add('on'));},0);
