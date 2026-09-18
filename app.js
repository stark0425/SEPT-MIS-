const seedData = [
  {
    "id": "seed-1",
    "employee": "RAJAN",
    "date": "2026-09-01",
    "customer": "NAVNEET AGARWAL",
    "mobile": "8126988054",
    "application": "821104835642",
    "premium": 35849.0,
    "sum_insured": "10LAC",
    "plan": "ASPIRE GOLD +",
    "addon": "TIERED NETWORK",
    "status": "ISSUED",
    "location": "BIJNOR",
    "credit_factor": 1.0
  },
  {
    "id": "seed-2",
    "employee": "ROHIT",
    "date": "2026-09-01",
    "customer": null,
    "mobile": "",
    "application": "",
    "premium": 8972.0,
    "sum_insured": "10LAC",
    "plan": "ASPIRE GOLD +",
    "addon": "-",
    "status": "ISSUED",
    "location": "AHMEDABAD",
    "credit_factor": 1.0
  },
  {
    "id": "seed-3",
    "employee": "RAJAN",
    "date": "2026-09-02",
    "customer": "PRAVEEN ",
    "mobile": "",
    "application": "",
    "premium": 17909.0,
    "sum_insured": "10LAC",
    "plan": "ASPIRE GOLD +",
    "addon": "TIERED NETWORK",
    "status": "ISSUED",
    "location": "PRAYAGRAJ ",
    "credit_factor": 1.0
  },
  {
    "id": "seed-4",
    "employee": "PRINCE",
    "date": "2026-09-02",
    "customer": "DEEPAK KUMAR",
    "mobile": "",
    "application": "",
    "premium": 26432.0,
    "sum_insured": "10LAC",
    "plan": "ASPIRE GOLD +",
    "addon": "-",
    "status": "ISSUED",
    "location": "PUNE",
    "credit_factor": 1.0
  },
  {
    "id": "seed-5",
    "employee": "ROHIT",
    "date": "2026-09-02",
    "customer": "VIJAY KUMAR YADAV",
    "mobile": "7892865084",
    "application": "",
    "premium": 19610.0,
    "sum_insured": "10LAC",
    "plan": "ASPIRE GOLD +",
    "addon": "TIERED NETWORK",
    "status": "ISSUED",
    "location": "GUJRAT",
    "credit_factor": 1.0
  },
  {
    "id": "seed-6",
    "employee": "RAJAN",
    "date": "2026-09-02",
    "customer": "SONALI ",
    "mobile": "8624910864",
    "application": "",
    "premium": 19528.0,
    "sum_insured": "10LAC",
    "plan": "ASPIRE GOLD +",
    "addon": "TIERED NETWORK",
    "status": "ISSUED",
    "location": "PUNE",
    "credit_factor": 1.0
  },
  {
    "id": "seed-7",
    "employee": "PRINCE",
    "date": "2026-09-03",
    "customer": "SUDHAKAR KUMAR",
    "mobile": "9984266096",
    "application": "",
    "premium": 17909.0,
    "sum_insured": "10LAC",
    "plan": "ASPIRE GOLD +",
    "addon": "TIERED NETWORK",
    "status": "ISSUED",
    "location": "LUCKNOW",
    "credit_factor": 1.0
  },
  {
    "id": "seed-8",
    "employee": "PRINCE",
    "date": "2026-09-04",
    "customer": "KAMAL HASSAN",
    "mobile": "9706790767",
    "application": "",
    "premium": 11498.0,
    "sum_insured": "10LAC",
    "plan": "ULTIMATE CARE ",
    "addon": "-",
    "status": "ISSUED",
    "location": "ASSAM",
    "credit_factor": 1.0
  },
  {
    "id": "seed-9",
    "employee": "RAJAN",
    "date": null,
    "customer": null,
    "mobile": "",
    "application": "",
    "premium": 33048.0,
    "sum_insured": null,
    "plan": null,
    "addon": null,
    "status": "ISSUED",
    "location": null,
    "credit_factor": 1.0
  },
  {
    "id": "seed-10",
    "employee": "KAIF",
    "date": null,
    "customer": null,
    "mobile": "",
    "application": "",
    "premium": 25939.0,
    "sum_insured": null,
    "plan": null,
    "addon": null,
    "status": "ISSUED",
    "location": null,
    "credit_factor": 1.0
  },
  {
    "id": "seed-11",
    "employee": "KAIF",
    "date": null,
    "customer": null,
    "mobile": "",
    "application": "",
    "premium": 36338.0,
    "sum_insured": null,
    "plan": null,
    "addon": null,
    "status": "ISSUED",
    "location": null,
    "credit_factor": 1.0
  },
  {
    "id": "seed-12",
    "employee": "HIMANSHU",
    "date": null,
    "customer": null,
    "mobile": "",
    "application": "",
    "premium": 52487.0,
    "sum_insured": null,
    "plan": null,
    "addon": null,
    "status": "ISSUED",
    "location": null,
    "credit_factor": 1.0
  },
  {
    "id": "seed-13",
    "employee": "KAVYANSH",
    "date": null,
    "customer": null,
    "mobile": "",
    "application": "",
    "premium": 22546.0,
    "sum_insured": null,
    "plan": null,
    "addon": null,
    "status": "ISSUED",
    "location": null,
    "credit_factor": 1.0
  },
  {
    "id": "seed-14",
    "employee": "ROHIT",
    "date": null,
    "customer": null,
    "mobile": "",
    "application": "",
    "premium": 39702.0,
    "sum_insured": null,
    "plan": null,
    "addon": null,
    "status": "ISSUED",
    "location": null,
    "credit_factor": 1.0
  },
  {
    "id": "seed-15",
    "employee": "NIKHIL",
    "date": null,
    "customer": null,
    "mobile": "",
    "application": "",
    "premium": 30371.0,
    "sum_insured": null,
    "plan": null,
    "addon": null,
    "status": "ISSUED",
    "location": null,
    "credit_factor": 1.0
  }
];
const CONFIG = { url: window.SUPABASE_URL || "", key: window.SUPABASE_ANON_KEY || "" };
let rows = [];
let supabaseClient = null;

const $ = id => document.getElementById(id);
const money = n => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(Number(n)||0);
const factorFor = loc => ({ "CAT A 40%":.40, "CAT B 75%":.75, "CAT B 90%":.90, "ALL":1 })[loc] ?? 1;
const netFor = r => Number(r.premium||0) * Number(r.credit_factor ?? 1) / 1.18;

async function init(){
  if(CONFIG.url && CONFIG.key){
    supabaseClient = window.supabase.createClient(CONFIG.url, CONFIG.key);
    $("syncStatus").textContent = "● CLOUD SYNC";
    $("syncStatus").style.color = "var(--green)";
    await loadCloud();
  } else {
    $("syncStatus").textContent = "LOCAL DEMO";
    rows = JSON.parse(localStorage.getItem("neon_mis_rows") || "null") || seedData;
    localStorage.setItem("neon_mis_rows", JSON.stringify(rows));
  }
  setupEmployees(); render(); setupEvents();
}
async function loadCloud(){
  const {data,error}=await supabaseClient.from("business").select("*").order("date",{ascending:false}).order("created_at",{ascending:false});
  if(error){console.error(error); alert("Cloud connection failed. Check config.js and Supabase table/RLS."); rows=seedData; return}
  rows=data || [];
}
async function saveRow(r){
  if(supabaseClient){
    const {error}=await supabaseClient.from("business").insert([r]);
    if(error){alert("Could not save to cloud: "+error.message); return false}
    await loadCloud(); return true;
  }
  rows.unshift(r); localStorage.setItem("neon_mis_rows",JSON.stringify(rows)); return true;
}
const EMPLOYEE_MASTER = ["HIMANSHU","RAJAN","ROHIT","AKASH","KAIF","NIKHIL","KAVYANSH","PRINCE","SUMAN"];
function employees(){ return EMPLOYEE_MASTER.slice(); }
function setupEmployees(){
  const emps=employees();
  $("employeeFilter").innerHTML='<option value="ALL">All Employees</option>'+emps.map(e=>`<option>${esc(e)}</option>`).join("");
  $("fEmployee").innerHTML=emps.map(e=>`<option>${esc(e)}</option>`).join("") || '<option>Employee 1</option>';
  $("fDate").value=new Date().toISOString().slice(0,10);
}
function filtered(){
  const e=$("employeeFilter").value, s=$("statusFilter").value, q=$("search").value.toLowerCase().trim();
  return rows.filter(r=>(e==="ALL"||r.employee===e)&&(s==="ALL"||r.status===s)&&(!q||[r.employee,r.customer,r.application,r.plan,r.location].join(" ").toLowerCase().includes(q)));
}
function render(){
  const data=filtered();
  const gross=data.reduce((a,r)=>a+Number(r.premium||0),0);
  const net=data.reduce((a,r)=>a+netFor(r),0);
  $("gross").textContent=money(gross); $("net").textContent=money(net);
  $("avg").textContent=money(data.length?gross/data.length:0); $("dealCount").textContent=`${data.length} deals`;
  const totals={}; data.forEach(r=>totals[r.employee]=(totals[r.employee]||0)+Number(r.premium||0));
  const ranked=Object.entries(totals).sort((a,b)=>b[1]-a[1]);
  $("top").textContent=ranked[0]?.[0]||"—"; $("topValue").textContent=money(ranked[0]?.[1]||0)+" gross";
  const max=ranked[0]?.[1]||1;
  $("leaderboard").innerHTML='<div class="leader">'+(ranked.length?ranked.map(([n,v],i)=>`<div class="leader-row"><div class="rank">0${i+1}</div><div><div class="name">${esc(n)}</div><div class="bar"><i style="width:${Math.max(4,v/max*100)}%"></i></div></div><div class="amount">${money(v)}</div><div class="count">${data.filter(r=>r.employee===n).length}</div></div>`).join(""):'<div style="padding:30px;color:#71809a">No business yet.</div>')+'</div>';
  renderBars(data); renderLedger(data);
}
function renderBars(data){
  const days=Array.from({length:30},(_,i)=>i+1), vals=days.map(d=>data.filter(r=>r.date && Number(r.date.slice(8,10))===d).reduce((a,r)=>a+Number(r.premium||0),0));
  const mx=Math.max(...vals,1);
  $("dailyBars").innerHTML=vals.map((v,i)=>`<div class="barcol" title="${i+1} Sep — ${money(v)}"><i style="height:${Math.max(3,v/mx*175)}px"></i><span>${[1,5,10,15,20,25,30].includes(i+1)?i+1:""}</span></div>`).join("");
}
function renderLedger(data){
  $("ledger").innerHTML=data.slice().sort((a,b)=>(b.date||"").localeCompare(a.date||"")).map(r=>`<tr><td><b>${esc(r.employee)}</b></td><td>${r.date||"—"}</td><td>${esc(r.customer||"—")}<br><span style="color:#59657b">${esc(r.application||"")}</span></td><td>${esc(r.plan||"—")}</td><td>${esc(r.location||"—")}</td><td><span class="badge">${esc(r.status||"—")}</span></td><td class="money">${money(r.premium)}</td><td class="money net">${money(netFor(r))}</td></tr>`).join("") || '<tr><td colspan="8" style="text-align:center;color:#71809a;padding:30px">No matching transactions.</td></tr>';
}
function setupEvents(){
  ["employeeFilter","statusFilter","search"].forEach(id=>$(id).addEventListener(id==="search"?"input":"change",render));
  $("refreshBtn").onclick=async()=>{if(supabaseClient) await loadCloud(); setupEmployees(); render()};
  $("addBtn").onclick=()=>{setupEmployees(); $("businessModal").showModal()};
  ["fPremium","fLocation"].forEach(id=>$(id).addEventListener("input",updateCalc));
  $("businessForm").addEventListener("submit", async e=>{
    e.preventDefault();
    const r={employee:$("fEmployee").value,date:$("fDate").value,customer:$("fCustomer").value.trim(),mobile:$("fMobile").value.trim(),application:$("fApp").value.trim(),premium:Number($("fPremium").value),sum_insured:$("fSI").value.trim(),plan:$("fPlan").value.trim(),addon:$("fAddon").value.trim(),status:$("fStatus").value,location:$("fLocation").value,credit_factor:factorFor($("fLocation").value)};
    if(!r.customer||!r.premium)return;
    const ok=await saveRow(r); if(ok){$("businessModal").close();e.target.reset();$("fDate").value=new Date().toISOString().slice(0,10);setupEmployees();render()}
  });
  updateCalc();
}
function updateCalc(){const f=factorFor($("fLocation").value);const p=Number($("fPremium").value||0);$("factorPreview").textContent=Math.round(f*100)+"%";$("creditPreview").textContent=money(p*f);$("netPreview").textContent=money(p*f/1.18)}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
init();
