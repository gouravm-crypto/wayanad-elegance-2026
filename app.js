/* ================================================================
   WAYANAD COMPANY OUTING 2026 — app.js
================================================================ */

/* CURSOR */
const CI = document.getElementById('CI'), CO = document.getElementById('CO');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; CI.style.left=mx+'px'; CI.style.top=my+'px'; });
(function loop(){ rx+=(mx-rx)*.13; ry+=(my-ry)*.13; CO.style.left=rx+'px'; CO.style.top=ry+'px'; requestAnimationFrame(loop); })();
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
tick(); setInterval(tick,1000);

/* DAY TABS */
function switchDay(id,el){
  document.querySelectorAll('.dtab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  document.querySelectorAll('.dpanel').forEach(p=>p.classList.remove('on'));
  document.getElementById('dp-'+id).classList.add('on');
}

/* ACTIVITY DATA */
const ACTS=[
  {
    key:'chembra', pos:'center center',
    num:'01', actNum:'Activity 01 / 07',
    day:'Saturday · 7:00 AM', dayClass:'sat', heroTag:'The Hero Moment',
    img:'images/chembra.jpg',
    name:'Chembra Peak — Heart-Shaped Lake',
    desc:"Wayanad's crown jewel. 2,100m above sea level. The Hridayathadakam — a naturally heart-shaped lake that has never dried in recorded history, not in any drought year, not ever. 7km round trip, approximately 4.5–5 hours for a mixed-fitness group of 16. The squad splits naturally into pace groups, reunites at the heart lake for the defining group photo of the trip. Only 200 trekkers per day. Call the forest office tomorrow morning.",
    facts:[{l:'Altitude',v:'2,100m ASL'},{l:'Daily Cap',v:'200 Only'},{l:'Trek',v:'7km · ~5 hrs'}],
    why:['Heart-shaped lake = the single most photographed and shared experience in all of Wayanad','Never dried in recorded history — not in any drought year, ever. Geologically unique.','200/day cap makes this exclusive by default — most groups who don\'t pre-book are turned away','6 AM arrival means mist on the peaks — the golden conditions burn off by 8 AM'],
    maps:'https://www.google.com/maps/search/Chembra+Peak+Meppadi+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Chembra+peak+heart+lake+trek+Wayanad+vlog',
    srch:'https://www.google.com/search?q=Chembra+Peak+Wayanad+forest+office+booking',
    price:'₹12,200', pnote:'group estimate · forest entry + guide', dur:'Saturday 7:00 AM\n~5 hrs · 7km RT'
  },
  {
    key:'zipline', pos:'center center',
    num:'02', actNum:'Activity 02 / 07',
    day:'Saturday · 3:00 PM', dayClass:'sat', heroTag:'The Thrill',
    img:'images/zipline.jpg',
    name:'Karapuzha Zipline + ATV',
    desc:'The 605m dam zipline at Karapuzha Adventure Park — you fly over the reservoir at full speed. Harness and helmet fully provided. After the zipline, ATV riding through off-road park tracks, guided by park staff. Pre-booked for Saturday 3 PM so the group walks in without waiting. No scary rides — this is thrilling, controlled, and has a 100% completion rate. Everyone flies.',
    facts:[{l:'Zipline',v:'605m Flight'},{l:'Also',v:'ATV Riding'},{l:'Duration',v:'~1.5 hrs'}],
    why:['Pre-booked slot means no waiting — a group of 16 walks straight in at 3 PM Saturday','Zipline over a reservoir is a different experience from any hill zipline — the water view is the feature','ATV riding follows immediately — two distinct activities back to back in one zone','No water elements — fully respects the no-water-activities constraint'],
    maps:'https://www.google.com/maps/search/Karapuzha+Adventure+Park+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Karapuzha+dam+zipline+ATV+Wayanad',
    srch:'https://www.google.com/search?q=Karapuzha+Adventure+Park+zipline+ATV+Wayanad+booking',
    price:'₹11,840', pnote:'group · zipline + ATV combined', dur:'Saturday 3:00 PM\n~1.5 hrs'
  },
  {
    key:'banasura', pos:'center 25%',
    num:'03', actNum:'Activity 03 / 07',
    day:'Saturday · 6:00 PM', dayClass:'sat', heroTag:'Golden Hour',
    img:'images/banasura.jpg',
    name:'Banasura Sagar Dam — Electric Buggy Sunset',
    desc:"Asia's largest earthen dam. Five minutes from Seagot resort. Electric buggies carry the squad to the dam summit at golden hour — the reservoir with its scattered islands spreads below, mountain ranges frame the back, amber light floods everything. The group panoramic from the dam top is the trip's wide money shot. Added from the buffer at ₹150/person — the best ₹2,400 spent on this trip.",
    facts:[{l:'Scale',v:"Asia's Largest"},{l:'Buggy',v:'₹150/person'},{l:'Duration',v:'~1 hr'}],
    why:["Asia's largest earthen dam at golden hour = a backdrop that looks professionally staged",'Electric buggy to the summit — the ride itself is content, no climbing, maximum elevation gain','5 minutes from Seagot resort — zero transit overhead, seamless after zipline+ATV','Added from the ₹33,360 buffer for ₹2,400 — the highest return-per-rupee upgrade possible'],
    maps:'https://www.google.com/maps/search/Banasura+Sagar+Dam+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Banasura+Sagar+dam+sunset+electric+buggy+Wayanad',
    srch:'https://www.google.com/search?q=Banasura+Sagar+Dam+electric+buggy+timings',
    price:'₹2,400', pnote:'group · ₹150/person × 16 · golden hour', dur:'Saturday 6:00 PM\n~1 hr'
  },
  {
    key:'resort', pos:'center center',
    num:'04', actNum:'Activity 04 / 07',
    day:'Saturday Night', dayClass:'night', heroTag:'Basecamp',
    img:'images/resort.jpg',
    name:'Seagot Banasura Resorts',
    desc:'The resort sits directly on the Banasura Sagar reservoir. Check-in at 2 PM Saturday, checkout Sunday morning. Dinner on the terrace. Bonfire after dinner. The entire group in one place with no itinerary, no schedule — just the night, the fire, the water, and the stories from the day. This is the social peak of the trip. The night that makes a team into something more.',
    facts:[{l:'Location',v:'Banasura Reservoir'},{l:'Check-in',v:'2 PM Saturday'},{l:'Night Plan',v:'Dinner+Bonfire'}],
    why:['Reservoir-facing property — the view from the rooms at sunrise Sunday is its own moment','Bonfire + team dinner after Chembra + zipline + dam = the perfect decompression space','Pre-confirm BBQ/bonfire with front desk on arrival — this is the most important check-in task','Sunday 5 AM wake-up is easy when the sleep is in a proper resort bed, not a TT seat'],
    maps:'https://www.google.com/maps/search/Seagot+Banasura+Resorts+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Seagot+Banasura+resort+Wayanad+review',
    srch:'https://www.google.com/search?q=Seagot+Banasura+Resorts+Wayanad+check+in',
    price:'TBC', pnote:'resort cost to be confirmed · within ₹33,360 buffer', dur:'Sat 2 PM — Sun Morning\nReservoir View'
  },
  {
    key:'pookode', pos:'center top',
    num:'05', actNum:'Activity 05 / 07',
    day:'Sunday · 7:00 AM', dayClass:'sun', heroTag:'Dawn Safari',
    img:'images/pookode.jpg',
    name:'Tholpetty Wildlife Sanctuary',
    desc:"Wayanad Wildlife Sanctuary at dawn. Open-top jeeps carry the squad through Kerala forest at the hour when animals are most active — elephants at the salt lick, gaur (Indian bison) in the clearings, spotted deer along the tracks, and if the morning is right, leopard footprints in the mud. This is a genuine wildlife experience. Not a zoo. Not a theme park. The real thing, in a protected forest, at first light.",
    facts:[{l:'Type',v:'Jeep Safari'},{l:'Wildlife',v:'Elephants · Bison'},{l:'Duration',v:'~2.5 hrs'}],
    why:['Dawn slot = the only time to do this correctly — animals are most active before 9 AM','Open-top jeeps through Kerala forest at sunrise = the most unexpected highlight of any Wayanad trip','A wildlife sanctuary experience is something most group outings never have — this is the differentiator','Tholpetty is less crowded than Wayanad\'s more famous Muthanga — better sightings, less traffic'],
    maps:'https://www.google.com/maps/search/Tholpetty+Wildlife+Sanctuary+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Tholpetty+wildlife+sanctuary+jeep+safari+Wayanad',
    srch:'https://www.google.com/search?q=Tholpetty+Wildlife+Sanctuary+jeep+safari+booking',
    price:'~₹4,000', pnote:'group · jeep safari · dawn slot', dur:'Sunday 7:00 AM\n~2.5 hrs'
  },
  {
    key:'edakkal', pos:'center center',
    num:'06', actNum:'Activity 06 / 07',
    day:'Sunday · 11:00 AM', dayClass:'sun', heroTag:'Cultural Closer',
    img:'images/edakkal.jpg',
    name:'Edakkal Caves',
    desc:'A natural cave cleft in the Ambukuthi hills. Neolithic and Mesolithic rock engravings — human figures, animals, spirals, symbols carved 6,000 years ago. The 45-minute climb has proper stairs and handrails throughout. Inside the cave, light filters through the cleft dramatically. The photography inside is incredible. Nothing else on this trip is in the same category for sheer uniqueness. Steel bottles mandatory — same rules as Chembra.',
    facts:[{l:'Age',v:'6,000+ Years'},{l:'Climb',v:'45 min · Stairs'},{l:'Timings',v:'9 AM–5 PM'}],
    why:['6,000-year-old Neolithic carvings — nothing else on the trip is in the same category for uniqueness','Dramatic cave cleft with natural directional light — the photography inside is genuinely exceptional','Stairs and handrails throughout — every single person in the group reaches the carvings comfortably','Closes Sunday on a deep cultural note — the team has experienced nature AND history in one weekend'],
    maps:'https://www.google.com/maps/search/Edakkal+Caves+Sulthan+Bathery+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Edakkal+caves+Wayanad+prehistoric+carvings+vlog',
    srch:'https://www.google.com/search?q=Edakkal+Caves+Wayanad+6000+year+old+carvings+entry',
    price:'₹800', pnote:'group entry × 16', dur:'Sunday 11:00 AM\n~1.5 hrs total'
  },
  {
    key:'kanthanpara', pos:'center center',
    num:'07', actNum:'Activity 07 / 07',
    day:'Sunday · 12:30 PM', dayClass:'sun',
    img:'images/kanthanpara.jpg',
    name:'Kanthanpara Falls — View from Banks',
    desc:'A wide waterfall hidden in the tea gardens near Meppadi. No water activities — viewing from the banks only, which perfectly respects the constraint and honestly produces the better photographs anyway. The tea estate path to the viewpoint is beautiful. 20 minutes maximum. Free. This is the optional stop — drop it if Edakkal runs long or the team wants extra time in Kalpetta for shopping.',
    facts:[{l:'Access',v:'Banks Only'},{l:'Cost',v:'Free'},{l:'Duration',v:'20 min max'}],
    why:['Constraint perfectly respected — view from banks only, zero water contact','Tea garden backdrop = the most cinematic waterfall framing in all of Wayanad','Free and directly en route from Edakkal to Kalpetta — zero detour cost','Optional: drop this if time is tight and the team wants more Kalpetta shopping time'],
    maps:'https://www.google.com/maps/search/Kanthanpara+Waterfalls+Meppadi+Wayanad',
    yt:'https://www.youtube.com/results?search_query=Kanthanpara+waterfalls+Wayanad+tea+garden+vlog',
    srch:'https://www.google.com/search?q=Kanthanpara+Waterfalls+Wayanad+view',
    price:'Free', pnote:'view from banks only · optional stop', dur:'Sunday 12:30 PM\n20 min max · optional'
  }
];

/* BUILD CHIPS */
const CC=document.getElementById('CHIPS');
ACTS.forEach((a,i)=>{
  const bc=a.dayClass==='sat'?'sat':a.dayClass==='sun'?'sun':'hero';
  const badge=a.heroTag?`<span class="ach-badge hero">${a.heroTag}</span>`:`<span class="ach-badge ${bc}">${a.day}</span>`;
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
  setTimeout(()=>{ const r=stage.getBoundingClientRect(); if(r.top<80) stage.scrollIntoView({behavior:'smooth',block:'nearest'}); },60);
}
function navAct(d){ if(curAct+d>=0&&curAct+d<ACTS.length) showAct(curAct+d); }

/* SCROLL REVEAL */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('on'); });
},{threshold:.04,rootMargin:'0px 0px 0px 0px'});
document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>obs.observe(el));
setTimeout(()=>{ document.querySelectorAll('.rv,.rv2,.rv3').forEach(el=>el.classList.add('on')); },2000);
