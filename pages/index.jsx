import { useState, useEffect } from "react";

const BASE_MATCHES = [
  {id:1,phase:"Groupes",group:"Groupe A",home:"Mexique",away:"Afrique du Sud",kickoff:"2026-06-11T20:00:00Z"},
  {id:2,phase:"Groupes",group:"Groupe A",home:"Corée du Sud",away:"Tchéquie",kickoff:"2026-06-12T05:00:00Z"},
  {id:3,phase:"Groupes",group:"Groupe B",home:"Canada",away:"Bosnie-Herzégovine",kickoff:"2026-06-12T19:00:00Z"},
  {id:4,phase:"Groupes",group:"Groupe D",home:"États-Unis",away:"Paraguay",kickoff:"2026-06-12T04:00:00Z"},
  {id:5,phase:"Groupes",group:"Groupe B",home:"Qatar",away:"Suisse",kickoff:"2026-06-13T20:00:00Z"},
  {id:6,phase:"Groupes",group:"Groupe C",home:"Brésil",away:"Maroc",kickoff:"2026-06-13T22:00:00Z"},
  {id:7,phase:"Groupes",group:"Groupe C",home:"Haïti",away:"Écosse",kickoff:"2026-06-14T07:00:00Z"},
  {id:8,phase:"Groupes",group:"Groupe D",home:"Australie",away:"Türkiye",kickoff:"2026-06-14T21:00:00Z"},
  {id:9,phase:"Groupes",group:"Groupe E",home:"Allemagne",away:"Curaçao",kickoff:"2026-06-14T17:00:00Z"},
  {id:10,phase:"Groupes",group:"Groupe F",home:"Pays-Bas",away:"Japon",kickoff:"2026-06-14T19:00:00Z"},
  {id:11,phase:"Groupes",group:"Groupe E",home:"Côte d'Ivoire",away:"Équateur",kickoff:"2026-06-14T03:00:00Z"},
  {id:12,phase:"Groupes",group:"Groupe F",home:"Suède",away:"Tunisie",kickoff:"2026-06-15T07:00:00Z"},
  {id:13,phase:"Groupes",group:"Groupe H",home:"Espagne",away:"Cap-Vert",kickoff:"2026-06-15T21:00:00Z"},
  {id:14,phase:"Groupes",group:"Groupe G",home:"Belgique",away:"Égypte",kickoff:"2026-06-15T19:00:00Z"},
  {id:15,phase:"Groupes",group:"Groupe H",home:"Arabie Saoudite",away:"Uruguay",kickoff:"2026-06-15T02:00:00Z"},
  {id:16,phase:"Groupes",group:"Groupe G",home:"Iran",away:"Nouvelle-Zélande",kickoff:"2026-06-16T10:00:00Z"},
  {id:17,phase:"Groupes",group:"Groupe I",home:"France",away:"Sénégal",kickoff:"2026-06-16T18:00:00Z"},
  {id:18,phase:"Groupes",group:"Groupe I",home:"Irak",away:"Norvège",kickoff:"2026-06-16T01:00:00Z"},
  {id:19,phase:"Groupes",group:"Groupe J",home:"Argentine",away:"Algérie",kickoff:"2026-06-16T20:00:00Z"},
  {id:20,phase:"Groupes",group:"Groupe J",home:"Autriche",away:"Jordanie",kickoff:"2026-06-17T09:00:00Z"},
  {id:21,phase:"Groupes",group:"Groupe K",home:"Portugal",away:"RD Congo",kickoff:"2026-06-17T21:00:00Z"},
  {id:22,phase:"Groupes",group:"Groupe L",home:"Angleterre",away:"Croatie",kickoff:"2026-06-17T20:00:00Z"},
  {id:23,phase:"Groupes",group:"Groupe L",home:"Ghana",away:"Panama",kickoff:"2026-06-17T03:00:00Z"},
  {id:24,phase:"Groupes",group:"Groupe K",home:"Ouzbékistan",away:"Colombie",kickoff:"2026-06-17T07:00:00Z"},
  {id:25,phase:"Groupes",group:"Groupe A",home:"Tchéquie",away:"Afrique du Sud",kickoff:"2026-06-18T21:00:00Z"},
  {id:26,phase:"Groupes",group:"Groupe B",home:"Suisse",away:"Bosnie-Herzégovine",kickoff:"2026-06-18T19:00:00Z"},
  {id:27,phase:"Groupes",group:"Groupe B",home:"Canada",away:"Qatar",kickoff:"2026-06-18T01:00:00Z"},
  {id:28,phase:"Groupes",group:"Groupe A",home:"Mexique",away:"Corée du Sud",kickoff:"2026-06-18T02:00:00Z"},
  {id:29,phase:"Groupes",group:"Groupe D",home:"États-Unis",away:"Australie",kickoff:"2026-06-19T22:00:00Z"},
  {id:30,phase:"Groupes",group:"Groupe C",home:"Écosse",away:"Maroc",kickoff:"2026-06-19T02:00:00Z"},
  {id:31,phase:"Groupes",group:"Groupe C",home:"Brésil",away:"Haïti",kickoff:"2026-06-20T04:30:00Z"},
  {id:32,phase:"Groupes",group:"Groupe D",home:"Türkiye",away:"Paraguay",kickoff:"2026-06-20T08:00:00Z"},
  {id:33,phase:"Groupes",group:"Groupe F",home:"Pays-Bas",away:"Suède",kickoff:"2026-06-20T21:00:00Z"},
  {id:34,phase:"Groupes",group:"Groupe E",home:"Allemagne",away:"Côte d'Ivoire",kickoff:"2026-06-20T01:00:00Z"},
  {id:35,phase:"Groupes",group:"Groupe E",home:"Équateur",away:"Curaçao",kickoff:"2026-06-21T05:00:00Z"},
  {id:36,phase:"Groupes",group:"Groupe F",home:"Tunisie",away:"Japon",kickoff:"2026-06-20T03:00:00Z"},
  {id:37,phase:"Groupes",group:"Groupe H",home:"Espagne",away:"Arabie Saoudite",kickoff:"2026-06-21T21:00:00Z"},
  {id:38,phase:"Groupes",group:"Groupe G",home:"Belgique",away:"Iran",kickoff:"2026-06-21T19:00:00Z"},
  {id:39,phase:"Groupes",group:"Groupe H",home:"Uruguay",away:"Cap-Vert",kickoff:"2026-06-21T02:00:00Z"},
  {id:40,phase:"Groupes",group:"Groupe G",home:"Nouvelle-Zélande",away:"Égypte",kickoff:"2026-06-22T08:00:00Z"},
  {id:41,phase:"Groupes",group:"Groupe J",home:"Argentine",away:"Autriche",kickoff:"2026-06-22T21:00:00Z"},
  {id:42,phase:"Groupes",group:"Groupe I",home:"France",away:"Irak",kickoff:"2026-06-22T02:00:00Z"},
  {id:43,phase:"Groupes",group:"Groupe I",home:"Norvège",away:"Sénégal",kickoff:"2026-06-23T04:00:00Z"},
  {id:44,phase:"Groupes",group:"Groupe J",home:"Jordanie",away:"Algérie",kickoff:"2026-06-23T08:00:00Z"},
  {id:45,phase:"Groupes",group:"Groupe K",home:"Portugal",away:"Ouzbékistan",kickoff:"2026-06-23T21:00:00Z"},
  {id:46,phase:"Groupes",group:"Groupe L",home:"Angleterre",away:"Ghana",kickoff:"2026-06-23T00:00:00Z"},
  {id:47,phase:"Groupes",group:"Groupe L",home:"Panama",away:"Croatie",kickoff:"2026-06-23T03:00:00Z"},
  {id:48,phase:"Groupes",group:"Groupe K",home:"Colombie",away:"RD Congo",kickoff:"2026-06-24T07:00:00Z"},
  {id:49,phase:"Groupes",group:"Groupe B",home:"Suisse",away:"Canada",kickoff:"2026-06-24T19:00:00Z"},
  {id:50,phase:"Groupes",group:"Groupe B",home:"Bosnie-Herzégovine",away:"Qatar",kickoff:"2026-06-24T19:00:00Z"},
  {id:51,phase:"Groupes",group:"Groupe C",home:"Écosse",away:"Brésil",kickoff:"2026-06-24T02:00:00Z"},
  {id:52,phase:"Groupes",group:"Groupe C",home:"Maroc",away:"Haïti",kickoff:"2026-06-24T02:00:00Z"},
  {id:53,phase:"Groupes",group:"Groupe A",home:"Tchéquie",away:"Mexique",kickoff:"2026-06-25T06:00:00Z"},
  {id:54,phase:"Groupes",group:"Groupe A",home:"Afrique du Sud",away:"Corée du Sud",kickoff:"2026-06-25T06:00:00Z"},
  {id:55,phase:"Groupes",group:"Groupe E",home:"Curaçao",away:"Côte d'Ivoire",kickoff:"2026-06-25T01:00:00Z"},
  {id:56,phase:"Groupes",group:"Groupe E",home:"Équateur",away:"Allemagne",kickoff:"2026-06-25T01:00:00Z"},
  {id:57,phase:"Groupes",group:"Groupe F",home:"Japon",away:"Suède",kickoff:"2026-06-25T04:00:00Z"},
  {id:58,phase:"Groupes",group:"Groupe F",home:"Tunisie",away:"Pays-Bas",kickoff:"2026-06-25T04:00:00Z"},
  {id:59,phase:"Groupes",group:"Groupe D",home:"Türkiye",away:"États-Unis",kickoff:"2026-06-26T09:00:00Z"},
  {id:60,phase:"Groupes",group:"Groupe D",home:"Paraguay",away:"Australie",kickoff:"2026-06-26T07:00:00Z"},
  {id:61,phase:"Groupes",group:"Groupe I",home:"Norvège",away:"France",kickoff:"2026-06-26T18:00:00Z"},
  {id:62,phase:"Groupes",group:"Groupe I",home:"Sénégal",away:"Irak",kickoff:"2026-06-26T18:00:00Z"},
  {id:63,phase:"Groupes",group:"Groupe H",home:"Cap-Vert",away:"Arabie Saoudite",kickoff:"2026-06-27T06:00:00Z"},
  {id:64,phase:"Groupes",group:"Groupe H",home:"Uruguay",away:"Espagne",kickoff:"2026-06-27T06:00:00Z"},
  {id:65,phase:"Groupes",group:"Groupe G",home:"Égypte",away:"Iran",kickoff:"2026-06-27T11:00:00Z"},
  {id:66,phase:"Groupes",group:"Groupe G",home:"Nouvelle-Zélande",away:"Belgique",kickoff:"2026-06-27T11:00:00Z"},
  {id:67,phase:"Groupes",group:"Groupe L",home:"Panama",away:"Angleterre",kickoff:"2026-06-27T21:00:00Z"},
  {id:68,phase:"Groupes",group:"Groupe L",home:"Croatie",away:"Ghana",kickoff:"2026-06-27T21:00:00Z"},
  {id:69,phase:"Groupes",group:"Groupe K",home:"Colombie",away:"Portugal",kickoff:"2026-06-27T23:30:00Z"},
  {id:70,phase:"Groupes",group:"Groupe K",home:"RD Congo",away:"Ouzbékistan",kickoff:"2026-06-27T23:30:00Z"},
  {id:71,phase:"Groupes",group:"Groupe J",home:"Algérie",away:"Autriche",kickoff:"2026-06-28T02:00:00Z"},
  {id:72,phase:"Groupes",group:"Groupe J",home:"Jordanie",away:"Argentine",kickoff:"2026-06-28T02:00:00Z"},
  {id:73,phase:"Seizièmes",home:"Afrique du Sud",away:"Canada",kickoff:"2026-06-28T19:00:00Z"},
  {id:74,phase:"Seizièmes",home:"Brésil",away:"Japon",kickoff:"2026-06-29T17:00:00Z"},
  {id:75,phase:"Seizièmes",home:"Allemagne",away:"Paraguay",kickoff:"2026-06-29T20:30:00Z"},
  {id:76,phase:"Seizièmes",home:"Pays-Bas",away:"Maroc",kickoff:"2026-06-30T01:00:00Z"},
  {id:77,phase:"Seizièmes",home:"Côte d'Ivoire",away:"Norvège",kickoff:"2026-06-30T17:00:00Z"},
  {id:78,phase:"Seizièmes",home:"France",away:"Suède",kickoff:"2026-06-30T21:00:00Z"},
  {id:79,phase:"Seizièmes",home:"Mexique",away:"Équateur",kickoff:"2026-07-01T01:00:00Z"},
  {id:80,phase:"Seizièmes",home:"Angleterre",away:"RD Congo",kickoff:"2026-07-01T16:00:00Z"},
  {id:81,phase:"Seizièmes",home:"Belgique",away:"Sénégal",kickoff:"2026-07-01T20:00:00Z"},
  {id:82,phase:"Seizièmes",home:"États-Unis",away:"Bosnie-Herzégovine",kickoff:"2026-07-02T00:00:00Z"},
  {id:83,phase:"Seizièmes",home:"Espagne",away:"Autriche",kickoff:"2026-07-02T19:00:00Z"},
  {id:84,phase:"Seizièmes",home:"Portugal",away:"Croatie",kickoff:"2026-07-02T23:00:00Z"},
  {id:85,phase:"Seizièmes",home:"Suisse",away:"Algérie",kickoff:"2026-07-03T03:00:00Z"},
  {id:86,phase:"Seizièmes",home:"Australie",away:"Égypte",kickoff:"2026-07-03T18:00:00Z"},
  {id:87,phase:"Seizièmes",home:"Argentine",away:"Cap-Vert",kickoff:"2026-07-03T22:00:00Z"},
  {id:88,phase:"Seizièmes",home:"Colombie",away:"Ghana",kickoff:"2026-07-04T01:30:00Z"},
];


const SORTED = [...BASE_MATCHES].sort((a,b)=>new Date(a.kickoff)-new Date(b.kickoff));
const ADMIN_PASS = "cdm2026";
const TZ = "Africa/Casablanca";

function isLocked(iso){return Date.now()>=new Date(iso).getTime();}
function fmtDay(iso){return new Date(iso).toLocaleDateString("fr-FR",{timeZone:TZ,weekday:"long",day:"numeric",month:"long",year:"numeric"});}
function fmtHour(iso){return new Date(iso).toLocaleTimeString("fr-FR",{timeZone:TZ,hour:"2-digit",minute:"2-digit"});}
function dayKey(iso){const d=new Date(new Date(iso).toLocaleString("en-US",{timeZone:TZ}));return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;}
function todayKey(){const d=new Date(new Date().toLocaleString("en-US",{timeZone:TZ}));return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;}

function scoreProno(p,r,isKnockout){
  if(!p||!r)return null;
  const ph=parseInt(p.home),pa=parseInt(p.away),rh=parseInt(r.home),ra=parseInt(r.away);
  if(isNaN(ph)||isNaN(pa)||isNaN(rh)||isNaN(ra))return null;

  if(!isKnockout){
    if(ph===rh&&pa===ra)return 5;
    const pw=ph>pa?"H":ph<pa?"A":"D",rw=rh>ra?"H":rh<ra?"A":"D",ok=pw===rw;
    if(ok&&(ph===rh||pa===ra))return 3;
    if(ok)return 2;
    return 0;
  }

  // PHASE ELIMINATOIRE
  const realNul=(rh===ra);
  const pronoNul=(ph===pa);

  // Score exact à 90 min (victoire)
  if(!realNul&&ph===rh&&pa===ra)return 10;

  if(realNul){
    const pronoWinner=p.winner||null;
    const realWinner=r.winner||null;
    const realIssue=r.issue||null;
    const goodWinner=pronoWinner&&realWinner&&pronoWinner===realWinner;
    if(pronoNul){
      // Nul exact à 90 min
      if(goodWinner){
        if(realIssue==="prol"){
          const prh=parseInt(p.extraHome),pra=parseInt(p.extraAway),rrh=parseInt(r.extraHome),rra=parseInt(r.extraAway);
          if(!isNaN(prh)&&!isNaN(pra)&&prh===rrh&&pra===rra)return 10;
          return 7;
        }
        if(realIssue==="pen")return 10;
      }
      return 3; // nul exact + mauvais vainqueur
    }
    // Nul approx
    if(goodWinner)return 4;
    return 2; // nul approx + mauvais vainqueur
  }

  // Victoire prédite à 90 min mais match nul en réalité → prolongation ou penalty
  const pw=ph>pa?"H":ph<pa?"A":"D";
  if(realNul){
    const realWinner=r.winner||null;
    const pronoWinner=pw==="H"?m_home:m_away; // on déduit le vainqueur prédit du score
    // On ne peut pas comparer sans connaître m.home/m.away ici
    // On utilise p.predictedWinner si dispo, sinon on compare avec r.winner
    const predW=ph>pa?"home":"away";
    const realW=r.winner||null;
    // Le vainqueur prédit = l'équipe qui gagne selon le score prédit
    const goodWinner=realW&&((predW==="home"&&realW==="home")||(predW==="away"&&realW==="away"));
    if(goodWinner&&r.issue==="prol")return 3;
    if(goodWinner&&r.issue==="pen")return 2;
    return 0;
  }
  const rw=rh>ra?"H":rh<ra?"A":"D",ok=pw===rw;
  if(!ok)return 0;
  if(ph===rh||pa===ra)return 7;
  const sameDiff=Math.abs(ph-pa)===Math.abs(rh-ra);
  if(sameDiff)return 6;
  return 5;
}

function computeStandings(players,pronos,results){
  return players.map(name=>{
    let total=0,exact=0,winners=0,consec=0,maxC=0;
    const filled=BASE_MATCHES.filter(m=>isLocked(m.kickoff)&&pronos[name]?.[m.id]?.home!==undefined&&pronos[name][m.id].home!=="").length;
    BASE_MATCHES.forEach(m=>{
      const pts=scoreProno(pronos[name]?.[m.id],results[m.id],m.phase!=="Groupes");
      if(pts!==null){total+=pts;if(pts===5)exact++;if(pts>=2){winners++;consec++;maxC=Math.max(maxC,consec);}else consec=0;}
      else consec=0;
    });
    const cb=Math.floor(maxC/5)*3;
    const champ=pronos[name]?.champion&&results.champion&&pronos[name].champion===results.champion?10:0;
    return{name,total:total+cb+champ,exact,winners,cb,champ,filled};
  }).sort((a,b)=>b.total-a.total||b.exact-a.exact||b.winners-a.winners);
}

function computeGroupStandings(results){
  const groups={};
  BASE_MATCHES.filter(m=>m.phase==="Groupes").forEach(m=>{
    if(!groups[m.group])groups[m.group]={};
    [m.home,m.away].forEach(team=>{
      if(!groups[m.group][team])groups[m.group][team]={team,pj:0,g:0,n:0,p:0,bp:0,bc:0,diff:0,pts:0};
    });
  });
  BASE_MATCHES.filter(m=>m.phase==="Groupes").forEach(m=>{
    const res=results[m.id];
    if(!res||res.home===undefined||res.home==="")return;
    const hg=parseInt(res.home),ag=parseInt(res.away);
    if(isNaN(hg)||isNaN(ag))return;
    const h=groups[m.group][m.home],a=groups[m.group][m.away];
    h.pj++;a.pj++;h.bp+=hg;h.bc+=ag;a.bp+=ag;a.bc+=hg;
    if(hg>ag){h.g++;a.p++;h.pts+=3;}
    else if(hg<ag){a.g++;h.p++;a.pts+=3;}
    else{h.n++;a.n++;h.pts+=1;a.pts+=1;}
  });
  const out={};
  Object.keys(groups).sort().forEach(g=>{
    out[g]=Object.values(groups[g]).map(t=>({...t,diff:t.bp-t.bc})).sort((a,b)=>b.pts-a.pts||b.diff-a.diff||b.bp-a.bp);
  });
  return out;
}

async function dbSave(key, value) {
  try {
    await fetch("/api/db", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({key, value}),
    });
  } catch(e) {
    try { localStorage.setItem("cdm2026_"+key, JSON.stringify(value)); } catch{}
  }
}

async function dbLoad(key) {
  try {
    const res = await fetch(`/api/db?key=${key}`);
    const data = await res.json();
    if (data.value !== null && data.value !== undefined) return data.value;
  } catch{}
  try {
    const v = localStorage.getItem("cdm2026_"+key);
    return v ? JSON.parse(v) : null;
  } catch { return null; }
}

const S = {
  app:{minHeight:"100vh",background:"#005226",color:"#f1f5f9",fontFamily:"'Inter','Segoe UI',sans-serif",paddingBottom:60},
  header:{background:"linear-gradient(135deg,#3a0000,#C1272D 50%,#003d14)",borderBottom:"2px solid #B8962E",padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8,position:"sticky",top:0,zIndex:100},
  page:{maxWidth:720,margin:"0 auto",padding:"20px 16px"},
  center:{maxWidth:480,margin:"0 auto",padding:"20px 16px"},
  card:{background:"#007a3d",border:"1px solid #B8962E44",borderRadius:12,padding:20,marginBottom:16},
  btn:{background:"linear-gradient(135deg,#C1272D,#8B0000)",color:"#fff",border:"none",padding:"12px 24px",borderRadius:8,fontSize:15,fontWeight:700,cursor:"pointer",width:"100%",display:"block",marginTop:12},
  input:{background:"#005c26",border:"1px solid #B8962E44",color:"#f1f5f9",padding:"10px 14px",borderRadius:8,fontSize:15,outline:"none",width:"100%",boxSizing:"border-box"},
  scoreInput:{background:"#004d1a",border:"1px solid #B8962E44",color:"#f1f5f9",width:48,height:40,textAlign:"center",borderRadius:6,fontSize:18,fontWeight:700,outline:"none"},
  navBtn:{background:"transparent",border:"1px solid #B8962E44",color:"#f1f5f9",padding:"5px 10px",borderRadius:6,cursor:"pointer",fontSize:13,fontWeight:600},
  navBtnOn:{background:"#C1272D",border:"1px solid #C1272D",color:"#fff"},
  dayHeader:{fontSize:13,fontWeight:700,color:"#FFD700",background:"#004d1a",border:"1px solid #B8962E44",borderRadius:8,padding:"8px 12px",marginBottom:8,marginTop:16,textTransform:"capitalize"},
  matchCard:{background:"#007a3d",border:"1px solid #B8962E44",borderRadius:10,padding:"12px 14px",marginBottom:8},
  phaseBtn:{background:"#006233",border:"1px solid #B8962E44",color:"#f1f5f9",padding:"6px 10px",borderRadius:6,cursor:"pointer",fontSize:12,fontWeight:600},
  phaseBtnOn:{background:"#C1272D",border:"1px solid #C1272D",color:"#fff"},
  chip:{fontSize:12,color:"#f1f5f9",background:"#004d1a",padding:"2px 8px",borderRadius:12},
  bonus:{fontSize:11,background:"#92400e",color:"#fcd34d",padding:"2px 8px",borderRadius:12,fontWeight:700},
  spinner:{width:14,height:14,border:"2px solid rgba(255,255,255,.3)",borderTop:"2px solid #fff",borderRadius:"50%",display:"inline-block",animation:"spin .8s linear infinite"},
  toast:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",color:"#fff",padding:"10px 20px",borderRadius:8,fontWeight:700,fontSize:14,zIndex:9999,boxShadow:"0 4px 20px rgba(0,0,0,.5)",whiteSpace:"nowrap"},
};

export default function App() {
  const [loading,setLoading]=useState(true);
  const [players,setPlayers]=useState([]);
  const [pronos,setPronos]=useState({});
  const [results,setResults]=useState({});
  const [adminSetup,setAdminSetup]=useState(false);
  const [screen,setScreen]=useState("home");
  const [activePlayer,setActivePlayer]=useState(null);
  const [adminMode,setAdminMode]=useState(false);
  const [adminPass,setAdminPass]=useState("");
  const [showAdminInput,setShowAdminInput]=useState(false);
  const [filterPhase,setFilterPhase]=useState("Groupes");
  const [fetchingScores,setFetchingScores]=useState(false);
  const [scoresLog,setScoresLog]=useState(null);
  const [toast,setToast]=useState(null);
  const [,setTick]=useState(0);

  useEffect(()=>{
    async function load(){
      const[p,pr,r]=await Promise.all([dbLoad("players"),dbLoad("pronos"),dbLoad("results")]);
      if(p&&p.length){setPlayers(p);setAdminSetup(true);}
      if(pr)setPronos(pr);
      if(r)setResults(r);
      setLoading(false);
    }
    load();
  },[]);

  useEffect(()=>{
    const t=setInterval(async()=>{
      const[p,pr,r]=await Promise.all([dbLoad("players"),dbLoad("pronos"),dbLoad("results")]);
      if(p&&p.length){setPlayers(p);setAdminSetup(true);}
      if(pr)setPronos(pr);
      if(r)setResults(r);
      setTick(x=>x+1);
    },15000);
    return()=>clearInterval(t);
  },[]);

  function showToast(msg,color="#16a34a"){setToast({msg,color});setTimeout(()=>setToast(null),3000);}

  async function savePlayers(p){
    setPlayers(p);setAdminSetup(true);
    await dbSave("players",p);
  }

  async function savePronosForPlayer(player,data){
    const latest = await dbLoad("pronos") || {};
    const merged={...latest,[player]:{...(latest[player]||{}),...data}};
    setPronos(merged);await dbSave("pronos",merged);
    showToast(`Pronos de ${player} sauvegardés ✓`);
  }

  async function saveResults(data){
    const merged={...results,...data};setResults(merged);await dbSave("results",merged);
    showToast("Résultats sauvegardés ✓");
  }

  async function handleFetchScores(){
    setFetchingScores(true);setScoresLog(null);
    try{
      const matchList=BASE_MATCHES.filter(m=>m.phase===filterPhase).map(m=>`[ID:${m.id}] ${m.home} vs ${m.away}`).join("\n");
      const resp=await fetch("/api/scores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phase:filterPhase,matches:matchList})});
      const parsed=await resp.json();
      if(!resp.ok)throw new Error(parsed.error||"Erreur serveur");
      const nr={};let count=0;
      (parsed.results||[]).forEach(({id,home,away})=>{if(id&&home!==undefined){nr[id]={home:String(home),away:String(away)};count++;}});
      const merged={...results,...nr,...(parsed.champion?{champion:parsed.champion}:{})};
      setResults(merged);await dbSave("results",merged);
      setScoresLog({ok:true,count});showToast(`✅ ${count} résultat(s) importé(s) !`);
    }catch(err){setScoresLog({ok:false,error:err.message});showToast("Erreur : "+err.message,"#dc2626");}
    setFetchingScores(false);
  }

  const standings=computeStandings(players,pronos,results);

  if(loading)return(
    <div style={{...S.app,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16,minHeight:"100vh"}}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <div style={{fontSize:48}}>🇲🇦</div>
      <div style={{color:"#FFD700",fontWeight:700}}>Chargement…</div>
      <div style={{width:24,height:24,border:"3px solid rgba(255,255,255,.2)",borderTop:"3px solid #FFD700",borderRadius:"50%",animation:"spin .8s linear infinite"}}/>
    </div>
  );

  return(
    <div style={{...S.app,position:"relative",overflow:"hidden"}}>
      <div className="dima-pattern" style={{zIndex:1}}>
        <div className="dima-row"><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span></div>
        <div className="dima-row"><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span></div>
        <div className="dima-row"><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span></div>
        <div className="dima-row"><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span></div>
        <div className="dima-row"><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span></div>
        <div className="dima-row"><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span></div>
        <div className="dima-row"><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span></div>
        <div className="dima-row"><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span></div>
      </div>
      <div style={{position:"relative",zIndex:2}}>
      <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}
        .dima-pattern{position:absolute;inset:-20px;z-index:1;transform:rotate(-20deg);pointer-events:none;display:flex;flex-direction:column;gap:6px;overflow:hidden;}
        .dima-row{display:flex;gap:14px;white-space:nowrap;font-family:'Impact',sans-serif;font-size:12px;letter-spacing:.1em;}
        .dima-row .fr{color:rgba(255,60,60,0.16);}
        .dima-row .ar{color:rgba(74,222,128,0.16);}
        .dima-row .sep{color:rgba(255,215,0,0.15);}
        *{box-sizing:border-box}
        input[type=number]::-webkit-inner-spin-button{opacity:1}
      `}</style>
      {toast&&<div style={{...S.toast,background:toast.color}}>{toast.msg}</div>}

      <header style={S.header}>
        <button style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:8,padding:0}} onClick={()=>setScreen("home")}>
          <span style={{fontSize:22}}>⚽</span>
          <span style={{fontSize:18,fontWeight:900,color:"#fff",letterSpacing:".05em",fontFamily:"Impact,sans-serif"}}>PRONOS <span style={{color:"#ff4444"}}>CDM</span> <span style={{color:"#FFD700"}}>2026</span></span>
        </button>
        {screen!=="home"&&screen!=="adminSetup"&&(
          <nav style={{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center"}}>
            {activePlayer&&<span style={{background:"rgba(0,0,0,0.3)",border:"1px solid #FFD700",color:"#FFD700",padding:"4px 10px",borderRadius:20,fontSize:12,fontWeight:600}}>👤 {activePlayer}</span>}
            {[["prono","📝"],["results","📊"],["groups","⚽"],["standings","🏆"]].map(([s,l])=>(
              <button key={s} style={{...S.navBtn,...(screen===s?S.navBtnOn:{})}} onClick={()=>setScreen(s)}>{l}</button>
            ))}
          </nav>
        )}
      </header>

      {screen==="home"&&(
        <div style={S.center}>
          <div style={{position:"relative",overflow:"hidden",background:"linear-gradient(160deg,#5a0000 0%,#A01020 30%,#6a0000 55%,#003010 80%,#001a08 100%)",borderRadius:16,marginBottom:20,display:"flex",flexDirection:"column",alignItems:"center",padding:"22px 20px 20px",gap:16}}>
            <div style={{position:"absolute",inset:0,zIndex:0,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",overflow:"hidden",borderRadius:16}}>
              {["","",""].map((_,i)=><div key={i} style={{overflow:"hidden"}}><img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" style={{width:"100%",height:"100%",objectFit:"cover",opacity:i===0?.28:i===1?.18:.14,filter:"saturate(0.6)",transform:i===1?"scaleX(-1)":"none"}} alt=""/></div>)}
            </div>
            <div className="dima-pattern">
              <div className="dima-row"><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span></div>
              <div className="dima-row"><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span></div>
              <div className="dima-row"><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span></div>
              <div className="dima-row"><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span></div>
              <div className="dima-row"><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span></div>
              <div className="dima-row"><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span><span className="sep"> ✦ </span><span className="fr">DIMA MAGHRIB</span><span className="sep"> ✦ </span><span className="ar">ديما المغرب</span></div>
            </div>
            <div style={{position:"absolute",inset:0,zIndex:2,background:"linear-gradient(160deg,rgba(70,0,0,0.5),rgba(0,0,0,0.05),rgba(0,40,10,0.6))",borderRadius:16,pointerEvents:"none"}}/>
            <div style={{position:"relative",zIndex:4,display:"flex",flexDirection:"column",alignItems:"center",gap:14,padding:"4px 0"}}>
              <div style={{background:"linear-gradient(135deg,#7a5a10,#B8962E,#FFD700,#B8962E,#7a5a10)",color:"#1a0a00",fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:13,letterSpacing:".16em",padding:"7px 24px",borderRadius:30,boxShadow:"0 4px 20px rgba(184,150,46,0.6),inset 0 1px 0 rgba(255,255,255,0.35)",textAlign:"center",whiteSpace:"nowrap"}}>⚽ PRONOS · COUPE DU MONDE 2026 ⚽</div>
              <div style={{position:"relative",width:160,height:107,borderRadius:6,overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,0.7),0 2px 8px rgba(0,0,0,0.5),0 0 0 2px rgba(255,215,0,0.3)"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} alt="PRONOS CDM 2026"/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(255,255,255,0.12) 0%,transparent 50%,rgba(0,0,0,0.15) 100%)",pointerEvents:"none"}}/>
              </div>
            </div>
          </div>
          <div style={{height:5,background:"linear-gradient(90deg,#C1272D 0%,#B8962E 50%,#006233 100%)",borderRadius:3,marginBottom:20,position:"relative"}}>
            <span style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"#FFD700",fontSize:14,background:"#005c26",padding:"0 6px",lineHeight:1}}>★</span>
          </div>
          {!adminSetup?(
            <div style={S.card}>
              <h2 style={{fontSize:18,fontWeight:800,marginBottom:8}}>Bienvenue !</h2>
              <p style={{color:"#d1fae5",fontSize:14,marginBottom:16}}>L'admin doit configurer les profils.</p>
              <button style={S.btn} onClick={()=>{setAdminMode(false);setAdminPass("");setShowAdminInput(false);setScreen("adminSetup")}}>⚙️ Configurer (Admin)</button>
            </div>
          ):(
            <>
              <div style={S.card}>
                <h2 style={{fontSize:18,fontWeight:800,marginBottom:8,color:"#FFD700"}}>👤 Qui êtes-vous ?</h2>
                <p style={{color:"#d1fae5",fontSize:14,marginBottom:16}}>Appuyez sur votre prénom.</p>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(100px,1fr))",gap:10}}>
                  {players.map(p=>{
                    const done=Object.keys(pronos[p]||{}).filter(k=>k!=="champion").length;
                    return(
                      <button key={p} style={{background:"#006233",border:"2px solid #B8962E44",borderRadius:12,padding:"12px 8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:8}} onClick={()=>{setActivePlayer(p);setScreen("prono")}}>
                        <div style={{width:44,height:44,borderRadius:"50%",background:"linear-gradient(135deg,#C1272D,#8B0000)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:800,color:"#fff",border:"2px solid #FFD700"}}>{p[0].toUpperCase()}</div>
                        <div style={{fontSize:14,fontWeight:700,color:"#fff"}}>{p}</div>
                        <div style={{fontSize:10,color:"#FFD700"}}>{done} pronos</div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div style={{display:"flex",gap:8}}>
                <button style={{...S.btn,flex:1,marginTop:0,background:"linear-gradient(135deg,#B8962E,#8B6914)",color:"#000"}} onClick={()=>setScreen("standings")}>🏆 Classement</button>
                <button style={{...S.btn,flex:1,marginTop:0,background:"linear-gradient(135deg,#004d1a,#003d14)"}} onClick={()=>{setAdminMode(false);setAdminPass("");setShowAdminInput(false);setScreen("adminSetup")}}>⚙️ Admin</button>
              </div>
            </>
          )}
        </div>
      )}

      {screen==="adminSetup"&&<AdminSetup adminMode={adminMode} adminPass={adminPass} setAdminPass={setAdminPass} showAdminInput={showAdminInput} setShowAdminInput={setShowAdminInput} onAuth={()=>setAdminMode(true)} players={players} onSave={async v=>{await savePlayers(v);setScreen("home");showToast("Joueurs configurés ✓");}} showToast={showToast}/>}

      {screen==="prono"&&activePlayer&&(
        <div style={S.page}>
          <PronoForm player={activePlayer} pronos={pronos[activePlayer]||{}} allPronos={pronos} players={players} results={results} onSave={d=>savePronosForPlayer(activePlayer,d)}/>
        </div>
      )}

      {screen==="results"&&(
        <div style={S.page}>
          {!adminMode?(
            <div style={{maxWidth:400,margin:"0 auto"}}>
              <div style={S.card}>
                <h2 style={{fontSize:18,fontWeight:800,marginBottom:8}}>🔐 Mode Admin</h2>
                <p style={{color:"#d1fae5",fontSize:14,marginBottom:16}}>Mot de passe requis.</p>
                {showAdminInput?(
                  <>
                    <input style={{...S.input,marginBottom:8}} type="password" placeholder="Mot de passe" value={adminPass} onChange={e=>setAdminPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&(adminPass===ADMIN_PASS?setAdminMode(true):showToast("Incorrect","#dc2626"))}/>
                    <button style={S.btn} onClick={()=>adminPass===ADMIN_PASS?setAdminMode(true):showToast("Incorrect","#dc2626")}>Entrer</button>
                  </>
                ):<button style={S.btn} onClick={()=>setShowAdminInput(true)}>Accéder</button>}
              </div>
            </div>
          ):(
            <ResultsForm results={results} filterPhase={filterPhase} setFilterPhase={setFilterPhase} onSave={saveResults} onFetchScores={handleFetchScores} fetching={fetchingScores} fetchLog={scoresLog}/>
          )}
        </div>
      )}

      {screen==="groups"&&(
        <div style={S.page}>
          <h2 style={{fontSize:20,fontWeight:800,textAlign:"center",marginBottom:20,color:"#FFD700"}}>⚽ Classement des Groupes</h2>
          {Object.entries(computeGroupStandings(results)).map(([groupName,teams])=>(
            <div key={groupName} style={{...S.card,marginBottom:16,padding:0,overflow:"hidden"}}>
              <div style={{background:"linear-gradient(135deg,#7a0000,#C1272D)",padding:"10px 14px",fontFamily:"Impact,sans-serif",fontSize:16,color:"#FFD700",letterSpacing:".08em"}}>{groupName.toUpperCase()}</div>
              <div style={{padding:"10px 8px"}}>
                <div style={{display:"flex",fontSize:10,color:"#B8962E",fontWeight:700,padding:"0 6px 6px",borderBottom:"1px solid #B8962E33",marginBottom:4}}>
                  <span style={{flex:3}}>Équipe</span>
                  <span style={{width:24,textAlign:"center"}}>J</span>
                  <span style={{width:24,textAlign:"center"}}>G</span>
                  <span style={{width:24,textAlign:"center"}}>N</span>
                  <span style={{width:24,textAlign:"center"}}>P</span>
                  <span style={{width:30,textAlign:"center"}}>Diff</span>
                  <span style={{width:30,textAlign:"center"}}>Pts</span>
                </div>
                {teams.map((t,i)=>(
                  <div key={t.team} style={{display:"flex",alignItems:"center",padding:"6px",borderRadius:6,background:i<2?"rgba(74,222,128,0.1)":"transparent",marginBottom:2}}>
                    <span style={{flex:3,fontSize:13,fontWeight:i<2?800:600,color:i<2?"#4ade80":"#f1f5f9"}}>{i+1}. {t.team}</span>
                    <span style={{width:24,textAlign:"center",fontSize:12,color:"#d1fae5"}}>{t.pj}</span>
                    <span style={{width:24,textAlign:"center",fontSize:12,color:"#d1fae5"}}>{t.g}</span>
                    <span style={{width:24,textAlign:"center",fontSize:12,color:"#d1fae5"}}>{t.n}</span>
                    <span style={{width:24,textAlign:"center",fontSize:12,color:"#d1fae5"}}>{t.p}</span>
                    <span style={{width:30,textAlign:"center",fontSize:12,color:"#d1fae5"}}>{t.diff>0?"+":""}{t.diff}</span>
                    <span style={{width:30,textAlign:"center",fontSize:14,fontWeight:800,color:"#FFD700"}}>{t.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {screen==="standings"&&(
        <div style={S.page}>
          <h2 style={{fontSize:20,fontWeight:800,textAlign:"center",marginBottom:20,color:"#FFD700"}}>🏆 Classement</h2>
          <div style={{...S.card,marginBottom:16}}>
            <p style={{fontWeight:700,fontSize:14,marginBottom:10,color:"#FFD700"}}>🎯 Champions prédits</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {players.map(p=>(
                <div key={p} style={{background:"#006233",border:"1px solid #B8962E44",borderRadius:8,padding:"6px 12px"}}>
                  <div style={{fontSize:11,color:"#d1fae5"}}>{p}</div>
                  <div style={{fontSize:14,fontWeight:700,color:"#fff"}}>{pronos[p]?.champion||"—"}</div>
                </div>
              ))}
            </div>
            {results.champion&&<div style={{marginTop:10,color:"#FFD700",fontSize:14}}>🏅 Champion réel : <strong>{results.champion}</strong></div>}
          </div>
          {standings.map((s,i)=>(
            <div key={s.name} style={{...S.card,marginBottom:8,border:i===0?"2px solid #FFD700":i===standings.length-1?"1px solid #dc2626":"1px solid #B8962E44"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
                <span style={{fontSize:22,minWidth:36}}>{["🥇","🥈","🥉"][i]||`#${i+1}`}</span>
                <span style={{fontSize:17,fontWeight:800,flex:1,color:"#fff"}}>{s.name}</span>
                <span style={{fontSize:20,fontWeight:900,color:"#FFD700"}}>{s.total} pts</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6}}>
                <div style={{...S.chip,display:"flex",alignItems:"center",justifyContent:"center",gap:5,padding:"6px 4px"}}>📝 <b>{s.filled}</b></div>
                <div style={{...S.chip,display:"flex",alignItems:"center",justifyContent:"center",gap:5,padding:"6px 4px"}}>✅ <b>{s.exact}</b></div>
                <div style={{...S.chip,display:"flex",alignItems:"center",justifyContent:"center",gap:5,padding:"6px 4px"}}>🎯 <b>{s.winners}</b></div>
              </div>
              {(s.cb>0||s.champ>0)&&(
                <div style={{display:"flex",gap:6,marginTop:6,flexWrap:"wrap"}}>
                  {s.cb>0&&<span style={S.bonus}>+{s.cb} Carré</span>}
                  {s.champ>0&&<span style={S.bonus}>+{s.champ} 🏆</span>}
                </div>
              )}
            </div>
          ))}
          <ScoreDetails players={players} pronos={pronos} results={results} filterPhase={filterPhase} setFilterPhase={setFilterPhase}/>
        </div>
      )}
      </div>
    </div>
  );
}

function AdminSetup({adminMode,adminPass,setAdminPass,showAdminInput,setShowAdminInput,onAuth,players,onSave,showToast}){
  const[local,setLocal]=useState(players.length?players:["","","","",""]);
  if(!adminMode)return(
    <div style={{maxWidth:400,margin:"0 auto",padding:"20px 16px"}}>
      <div style={{background:"#007a3d",border:"1px solid #B8962E44",borderRadius:12,padding:20}}>
        <h2 style={{fontSize:18,fontWeight:800,marginBottom:8,color:"#FFD700"}}>⚙️ Configuration Admin</h2>
        <p style={{color:"#d1fae5",fontSize:14,marginBottom:16}}>Entrez le mot de passe.</p>
        {showAdminInput?(
          <>
            <input style={{background:"#005c26",border:"1px solid #B8962E44",color:"#f1f5f9",padding:"10px 14px",borderRadius:8,fontSize:15,outline:"none",width:"100%",marginBottom:8}} type="password" placeholder="Mot de passe" value={adminPass} onChange={e=>setAdminPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&(adminPass===ADMIN_PASS?onAuth():showToast("Incorrect","#dc2626"))}/>
            <button style={{background:"linear-gradient(135deg,#C1272D,#8B0000)",color:"#fff",border:"none",padding:"11px",borderRadius:8,fontSize:15,fontWeight:700,cursor:"pointer",width:"100%",marginBottom:8}} onClick={()=>adminPass===ADMIN_PASS?onAuth():showToast("Incorrect","#dc2626")}>Entrer</button>
          </>
        ):<button style={{background:"linear-gradient(135deg,#C1272D,#8B0000)",color:"#fff",border:"none",padding:"11px",borderRadius:8,fontSize:15,fontWeight:700,cursor:"pointer",width:"100%"}} onClick={()=>setShowAdminInput(true)}>Accéder</button>}
      </div>
    </div>
  );
  return(
    <div style={{maxWidth:500,margin:"0 auto",padding:"20px 16px"}}>
      <h2 style={{fontSize:18,fontWeight:800,marginBottom:16,color:"#FFD700"}}>⚙️ Gestion des joueurs</h2>
      <div style={{background:"#007a3d",border:"1px solid #B8962E44",borderRadius:12,padding:20}}>
        {local.map((p,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
            <div style={{width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg,#C1272D,#8B0000)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:"#fff",flexShrink:0,border:"1px solid #FFD700"}}>{p?p[0].toUpperCase():i+1}</div>
            <input style={{background:"#005c26",border:"1px solid #B8962E44",color:"#f1f5f9",padding:"10px 14px",borderRadius:8,fontSize:15,outline:"none",flex:1}} placeholder={`Joueur ${i+1}`} value={p} onChange={e=>{const n=[...local];n[i]=e.target.value;setLocal(n);}}/>
            {local.length>2&&<button style={{background:"#004d1a",border:"1px solid #B8962E44",color:"#f1f5f9",width:32,height:32,borderRadius:6,cursor:"pointer",fontSize:14,flexShrink:0}} onClick={()=>setLocal(local.filter((_,j)=>j!==i))}>✕</button>}
          </div>
        ))}
        {local.length<12&&<button style={{background:"#005c26",border:"1px dashed #B8962E",color:"#FFD700",padding:"10px",borderRadius:8,fontSize:14,cursor:"pointer",width:"100%",marginBottom:8}} onClick={()=>setLocal([...local,""])}>+ Ajouter</button>}
        <button style={{background:"linear-gradient(135deg,#C1272D,#8B0000)",color:"#fff",border:"none",padding:"12px",borderRadius:8,fontSize:15,fontWeight:700,cursor:"pointer",width:"100%",marginTop:8}} onClick={()=>{const v=local.filter(p=>p.trim());if(v.length<2)return showToast("Minimum 2 joueurs !","#dc2626");onSave(v);}}>💾 Sauvegarder</button>
      </div>
    </div>
  );
}

function PronoForm({player,pronos,allPronos,players,results,onSave}){
  const[local,setLocal]=useState(pronos);
  const[view,setView]=useState("my");
  useEffect(()=>setLocal(pronos),[player]);
  const set=(id,side,val)=>setLocal(l=>({...l,[id]:{...l[id],[side]:val}}));
  const locked=SORTED.filter(m=>isLocked(m.kickoff)).length;
  const open=SORTED.length-locked;
  const tk=todayKey();
  const tmKey=(()=>{const d=new Date();d.setDate(d.getDate()+1);const tm=new Date(d.toLocaleString("en-US",{timeZone:TZ}));return `${tm.getFullYear()}-${tm.getMonth()}-${tm.getDate()}`;})();
  const todayMatches=SORTED.filter(m=>(dayKey(m.kickoff)===tk||dayKey(m.kickoff)===tmKey)&&!isLocked(m.kickoff));
  return(
    <div>
      <div style={{background:"#007a3d",border:"1px solid #B8962E44",borderRadius:12,padding:20,display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
        <div style={{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg,#C1272D,#8B0000)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:800,color:"#fff",border:"2px solid #FFD700"}}>{player[0].toUpperCase()}</div>
        <div>
          <div style={{fontWeight:800,fontSize:18,color:"#fff"}}>{player}</div>
          <div style={{fontSize:12,color:"#d1fae5",marginTop:3}}>
            <span style={{color:"#4ade80"}}>🟢 {open} ouvert(s)</span>
            {locked>0&&<span style={{color:"#f87171",marginLeft:10}}>🔒 {locked} verrouillé(s)</span>}
          </div>
        </div>
      </div>
      {todayMatches.length>0&&(
        <div style={{background:"linear-gradient(135deg,#7a0000,#C1272D)",border:"2px solid #FFD700",borderRadius:14,padding:16,marginBottom:16}}>
          <div style={{fontFamily:"Impact,sans-serif",fontSize:18,color:"#FFD700",letterSpacing:".1em",marginBottom:12}}>⚡ MATCHS DU JOUR & DEMAIN — À PRONO !</div>
          {todayMatches.map(m=>{
            const isKO=m.phase!=="Groupes";
            const p=local[m.id]||{};
            const isNul=p.home!==undefined&&p.away!==undefined&&p.home!==""&&p.away!==""&&parseInt(p.home)===parseInt(p.away);
            return(
            <div key={m.id} style={{background:"rgba(0,0,0,0.3)",borderRadius:10,padding:"12px 14px",marginBottom:8}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <span style={{fontSize:11,color:"#FFD700",textTransform:"uppercase",fontWeight:700}}>{m.group||m.phase}</span>
                <span style={{fontSize:11,color:"#fbbf24",fontWeight:600}}>⏰ {fmtHour(m.kickoff)}</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{flex:1,fontSize:13,fontWeight:700,color:"#fff",textAlign:"center"}}>{m.home}</span>
                <input style={{background:"rgba(0,0,0,0.4)",border:"2px solid #FFD700",color:"#fff",width:48,height:42,textAlign:"center",borderRadius:8,fontSize:20,fontWeight:900,outline:"none"}} type="number" min="0" max="20" placeholder="0" value={p.home??""} onChange={e=>set(m.id,"home",e.target.value)}/>
                <span style={{color:"#FFD700",fontWeight:900,fontSize:20}}>–</span>
                <input style={{background:"rgba(0,0,0,0.4)",border:"2px solid #FFD700",color:"#fff",width:48,height:42,textAlign:"center",borderRadius:8,fontSize:20,fontWeight:900,outline:"none"}} type="number" min="0" max="20" placeholder="0" value={p.away??""} onChange={e=>set(m.id,"away",e.target.value)}/>
                <span style={{flex:1,fontSize:13,fontWeight:700,color:"#fff",textAlign:"center"}}>{m.away}</span>
              </div>
              {isKO&&isNul&&(
                <div style={{marginTop:10,background:"rgba(0,0,0,0.3)",borderRadius:8,padding:10}}>
                  <div style={{fontSize:12,color:"#FFD700",fontWeight:700,marginBottom:8}}>🔄 Nul à 90 min — Qui gagne ensuite ?</div>
                  <div style={{display:"flex",gap:6,marginBottom:8}}>
                    {["prol","pen"].map(issue=>(
                      <button key={issue} onClick={()=>set(m.id,"issue",p.issue===issue?null:issue)} style={{flex:1,padding:"7px 4px",borderRadius:7,border:`2px solid ${p.issue===issue?"#FFD700":"#B8962E44"}`,background:p.issue===issue?"#FFD700":"rgba(0,0,0,0.3)",color:p.issue===issue?"#000":"#fff",fontWeight:700,fontSize:13,cursor:"pointer"}}>
                        {issue==="prol"?"⏱️ Prolongation":"🥅 Penalties"}
                      </button>
                    ))}
                  </div>
                  {p.issue&&(
                    <div>
                      <div style={{fontSize:12,color:"#d1fae5",marginBottom:6}}>Vainqueur :</div>
                      <div style={{display:"flex",gap:6,marginBottom:p.issue==="prol"?8:0}}>
                        {[m.home,m.away].map(team=>(
                          <button key={team} onClick={()=>set(m.id,"winner",p.winner===team?null:team)} style={{flex:1,padding:"7px 4px",borderRadius:7,border:`2px solid ${p.winner===team?"#4ade80":"#B8962E44"}`,background:p.winner===team?"#166534":"rgba(0,0,0,0.3)",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer"}}>
                            {p.winner===team?"✅ ":""}{team}
                          </button>
                        ))}
                      </div>
                      {p.issue==="prol"&&(
                        <div style={{marginTop:8}}>
                          <div style={{fontSize:12,color:"#d1fae5",marginBottom:6}}>Score après prolongation :</div>
                          <div style={{display:"flex",alignItems:"center",gap:8}}>
                            <span style={{flex:1,fontSize:12,color:"#fff",textAlign:"center"}}>{m.home}</span>
                            <input style={{background:"rgba(0,0,0,0.4)",border:"2px solid #B8962E",color:"#fff",width:42,height:36,textAlign:"center",borderRadius:6,fontSize:16,fontWeight:900,outline:"none"}} type="number" min="0" max="20" placeholder="?" value={p.extraHome??""} onChange={e=>set(m.id,"extraHome",e.target.value)}/>
                            <span style={{color:"#FFD700",fontWeight:700}}>–</span>
                            <input style={{background:"rgba(0,0,0,0.4)",border:"2px solid #B8962E",color:"#fff",width:42,height:36,textAlign:"center",borderRadius:6,fontSize:16,fontWeight:900,outline:"none"}} type="number" min="0" max="20" placeholder="?" value={p.extraAway??""} onChange={e=>set(m.id,"extraAway",e.target.value)}/>
                            <span style={{flex:1,fontSize:12,color:"#fff",textAlign:"center"}}>{m.away}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            );
          })}
          <button style={{background:"linear-gradient(135deg,#B8962E,#8B6914)",color:"#000",border:"none",padding:"13px",borderRadius:10,fontSize:15,fontWeight:800,cursor:"pointer",width:"100%",marginTop:4}} onClick={()=>onSave(local)}>⚡ Valider mes pronos du jour !</button>
        </div>
      )}
      <div style={{display:"flex",gap:6,marginBottom:16}}>
        {[["my","📝 Mes pronos"],["all","👥 Tout le monde"]].map(([v,l])=>(
          <button key={v} style={{background:view===v?"#C1272D":"#006233",border:`1px solid ${view===v?"#C1272D":"#B8962E44"}`,color:"#fff",padding:"8px 16px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:600}} onClick={()=>setView(v)}>{l}</button>
        ))}
      </div>
      {view==="my"&&(
        <>
          <div style={{background:"#007a3d",border:"1px solid #B8962E44",borderRadius:12,padding:20,marginBottom:14}}>
            <label style={{fontSize:13,color:"#FFD700",display:"block",marginBottom:8}}>🏆 Champion prédit (+10 pts)</label>
            <input style={{background:"#005c26",border:"1px solid #B8962E44",color:"#f1f5f9",padding:"8px 12px",borderRadius:8,fontSize:15,outline:"none",width:"100%"}} placeholder="Équipe championne" value={local.champion||""} onChange={e=>setLocal(l=>({...l,champion:e.target.value}))}/>
          </div>
          {(()=>{
            let lastDay=null;
            return SORTED.map(m=>{
              const lk=isLocked(m.kickoff);
              const dk=dayKey(m.kickoff);
              const nd=dk!==lastDay;lastDay=dk;
              return(
                <div key={m.id}>
                  {nd&&<div style={S.dayHeader}>📅 {fmtDay(m.kickoff)}</div>}
                  <div style={{background:lk?"#1a0808":"#007a3d",border:`1px solid ${lk?"#7f1d1d":"#B8962E44"}`,borderRadius:10,padding:"12px 14px",marginBottom:8,opacity:lk?.85:1}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                      <span style={{fontSize:11,color:"#FFD700",textTransform:"uppercase"}}>{m.group||m.phase}</span>
                      <span style={{fontSize:11,fontWeight:600}}>{lk?<span style={{color:"#f87171"}}>🔒 {fmtHour(m.kickoff)}</span>:<span style={{color:"#fbbf24"}}>⏰ {fmtHour(m.kickoff)}</span>}</span>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <span style={{flex:1,fontSize:13,fontWeight:600,color:"#fff",textAlign:"center"}}>{m.home}</span>
                      <input style={{background:lk?"#1a0808":"#004d1a",border:`1px solid ${lk?"#7f1d1d":(local[m.id]?.home===undefined||local[m.id]?.home===""?"#dc2626":"#B8962E44")}`,color:lk?"#4b5563":"#f1f5f9",width:48,height:40,textAlign:"center",borderRadius:6,fontSize:18,fontWeight:700,outline:"none"}} type="number" min="0" max="20" placeholder="?" disabled={lk} value={local[m.id]?.home??""} onChange={e=>!lk&&set(m.id,"home",e.target.value)}/>
                      <span style={{color:"#B8962E",fontWeight:700,fontSize:18}}>–</span>
                      <input style={{background:lk?"#1a0808":"#004d1a",border:`1px solid ${lk?"#7f1d1d":(local[m.id]?.away===undefined||local[m.id]?.away===""?"#dc2626":"#B8962E44")}`,color:lk?"#4b5563":"#f1f5f9",width:48,height:40,textAlign:"center",borderRadius:6,fontSize:18,fontWeight:700,outline:"none"}} type="number" min="0" max="20" placeholder="?" disabled={lk} value={local[m.id]?.away??""} onChange={e=>!lk&&set(m.id,"away",e.target.value)}/>
                      <span style={{flex:1,fontSize:13,fontWeight:600,color:"#fff",textAlign:"center"}}>{m.away}</span>
                    </div>
                    {lk&&results[m.id]&&<div style={{textAlign:"center",fontSize:12,color:"#4ade80",marginTop:6}}>Résultat : {results[m.id].home}–{results[m.id].away}</div>}
                    {!lk&&m.phase!=="Groupes"&&(()=>{
                      const p=local[m.id]||{};
                      const isNul=p.home!==undefined&&p.away!==undefined&&p.home!==""&&p.away!==""&&parseInt(p.home)===parseInt(p.away);
                      if(!isNul)return null;
                      return(
                        <div style={{marginTop:10,background:"rgba(0,0,0,0.2)",borderRadius:8,padding:10}}>
                          <div style={{fontSize:11,color:"#FFD700",fontWeight:700,marginBottom:8}}>🔄 Nul à 90 min — Qui gagne ensuite ?</div>
                          <div style={{display:"flex",gap:6,marginBottom:8}}>
                            {["prol","pen"].map(issue=>(
                              <button key={issue} onClick={()=>set(m.id,"issue",p.issue===issue?null:issue)} style={{flex:1,padding:"6px 4px",borderRadius:7,border:`2px solid ${p.issue===issue?"#FFD700":"#B8962E44"}`,background:p.issue===issue?"#FFD700":"rgba(0,0,0,0.3)",color:p.issue===issue?"#000":"#fff",fontWeight:700,fontSize:12,cursor:"pointer"}}>
                                {issue==="prol"?"⏱️ Prolongation":"🥅 Penalties"}
                              </button>
                            ))}
                          </div>
                          {p.issue&&(
                            <div>
                              <div style={{fontSize:11,color:"#d1fae5",marginBottom:6}}>Vainqueur :</div>
                              <div style={{display:"flex",gap:6,marginBottom:p.issue==="prol"?8:0}}>
                                {[m.home,m.away].map(team=>(
                                  <button key={team} onClick={()=>set(m.id,"winner",p.winner===team?null:team)} style={{flex:1,padding:"6px 4px",borderRadius:7,border:`2px solid ${p.winner===team?"#4ade80":"#B8962E44"}`,background:p.winner===team?"#166534":"rgba(0,0,0,0.3)",color:"#fff",fontWeight:700,fontSize:11,cursor:"pointer"}}>
                                    {p.winner===team?"✅ ":""}{team}
                                  </button>
                                ))}
                              </div>
                              {p.issue==="prol"&&(
                                <div style={{marginTop:8}}>
                                  <div style={{fontSize:11,color:"#d1fae5",marginBottom:6}}>Score après prolongation :</div>
                                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                                    <span style={{flex:1,fontSize:11,color:"#fff",textAlign:"center"}}>{m.home}</span>
                                    <input style={{background:"rgba(0,0,0,0.3)",border:"1px solid #B8962E",color:"#fff",width:38,height:32,textAlign:"center",borderRadius:6,fontSize:14,fontWeight:900,outline:"none"}} type="number" min="0" max="20" placeholder="?" value={p.extraHome??""} onChange={e=>set(m.id,"extraHome",e.target.value)}/>
                                    <span style={{color:"#FFD700",fontWeight:700}}>–</span>
                                    <input style={{background:"rgba(0,0,0,0.3)",border:"1px solid #B8962E",color:"#fff",width:38,height:32,textAlign:"center",borderRadius:6,fontSize:14,fontWeight:900,outline:"none"}} type="number" min="0" max="20" placeholder="?" value={p.extraAway??""} onChange={e=>set(m.id,"extraAway",e.target.value)}/>
                                    <span style={{flex:1,fontSize:11,color:"#fff",textAlign:"center"}}>{m.away}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              );
            });
          })()}
          <button style={{...S.btn,marginTop:8}} onClick={()=>{const incomplete=SORTED.filter(m=>{if(isLocked(m.kickoff))return false;const h=local[m.id]?.home;const a=local[m.id]?.away;const hFilled=h!==undefined&&h!=='';const aFilled=a!==undefined&&a!=='';return hFilled!==aFilled;});if(incomplete.length>0){const names=incomplete.map(m=>m.home+' - '+m.away).join(', ');alert('⚠️ Prono incomplet ! Tu dois remplir LES DEUX scores ou laisser le match vide : '+names);return;}onSave(local);}}>💾 Sauvegarder mes pronos</button>
        </>
      )}
      {view==="all"&&(
        <div>
          <div style={{background:"#004d1a",border:"1px solid #B8962E44",borderRadius:12,padding:14,marginBottom:14}}>
            <p style={{margin:0,fontSize:13,color:"#4ade80"}}>👥 Pronos visibles après le coup d'envoi.</p>
          </div>
          {(()=>{
            const lockedMatches=[...SORTED.filter(m=>isLocked(m.kickoff))].reverse();
            const upcomingMatches=SORTED.filter(m=>!isLocked(m.kickoff));
            const ordered=[...lockedMatches,...upcomingMatches];
            let lastDay=null;let lastLockState=null;
            return ordered.map(m=>{
              const lk=isLocked(m.kickoff);
              const dk=dayKey(m.kickoff);
              const stateChanged=lk!==lastLockState;
              const nd=(dk!==lastDay)||stateChanged;lastDay=dk;lastLockState=lk;
              return(
                <div key={m.id}>
                  {stateChanged&&<div style={{...S.dayHeader,background:lk?"#7a0000":"#004d1a",color:"#fff"}}>{lk?"🔓 Matchs en cours / terminés":"⏳ Matchs à venir"}</div>}
                  {nd&&!stateChanged&&<div style={S.dayHeader}>📅 {fmtDay(m.kickoff)}</div>}
                  <div style={{background:"#007a3d",border:"1px solid #B8962E44",borderRadius:10,padding:"12px 14px",marginBottom:8}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                      <span style={{fontSize:11,color:"#FFD700",textTransform:"uppercase"}}>{m.group||m.phase}</span>
                      <span style={{fontSize:11,color:"#fbbf24",fontWeight:600}}>{lk?"🔒":"⏰"} {fmtHour(m.kickoff)}</span>
                    </div>
                    <div style={{fontWeight:700,fontSize:14,color:"#fff",textAlign:"center",marginBottom:8}}>{m.home} vs {m.away}</div>
                    {lk?(
                      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                        {players.map(p=>{
                          const pro=allPronos[p]?.[m.id];
                          return(
                            <div key={p} style={{background:"#005c26",border:"1px solid #B8962E44",borderRadius:8,padding:"5px 10px",flex:"1 1 80px",textAlign:"center"}}>
                              <div style={{fontSize:10,color:"#FFD700",marginBottom:2}}>{p}</div>
                              <div style={{fontSize:15,fontWeight:800,color:pro?"#fff":"#374151"}}>{pro?`${pro.home}–${pro.away}`:"—"}</div>
                            </div>
                          );
                        })}
                      </div>
                    ):(
                      <div style={{fontSize:12,color:"#B8962E",textAlign:"center",fontStyle:"italic"}}>🔒 Visible après le coup d'envoi</div>
                    )}
                  </div>
                </div>
              );
            });
          })()}
        </div>
      )}
    </div>
  );
}

function ResultsForm({results,filterPhase,setFilterPhase,onSave,onFetchScores,fetching,fetchLog}){
  const[local,setLocal]=useState(results);
  useEffect(()=>setLocal(results),[results]);
  const set=(id,side,val)=>setLocal(l=>({...l,[id]:{...l[id],[side]:val}}));
  const PHASES=["Groupes","Seizièmes","8e de finale","Quart de finale","Demi-finale","3e place","Finale"];
  const filtered=[...BASE_MATCHES.filter(m=>m.phase===filterPhase)].reverse();
  return(
    <div>
      <h2 style={{fontSize:18,fontWeight:800,marginBottom:16,color:"#FFD700"}}>📊 Résultats officiels</h2>
      <div style={{background:"linear-gradient(135deg,#004d1a,#006233)",border:"2px solid #B8962E",borderRadius:14,padding:16,marginBottom:20,display:"flex",alignItems:"flex-start",gap:16,flexWrap:"wrap"}}>
        <div style={{flex:1}}>
          <div style={{fontWeight:700,fontSize:15,marginBottom:4,color:"#fff"}}>🌐 Import automatique</div>
          <div style={{fontSize:13,color:"#d1fae5"}}>Phase : <strong style={{color:"#FFD700"}}>{filterPhase}</strong></div>
          {fetchLog&&<div style={{marginTop:10,padding:"8px 12px",borderRadius:8,background:fetchLog.ok?"#052e16":"#1f0a0a",border:`1px solid ${fetchLog.ok?"#166534":"#7f1d1d"}`,fontSize:13,color:fetchLog.ok?"#4ade80":"#f87171"}}>{fetchLog.ok?`✅ ${fetchLog.count} résultat(s)`:`❌ ${fetchLog.error}`}</div>}
        </div>
        <button style={{background:"linear-gradient(135deg,#B8962E,#8B6914)",color:"#000",border:"none",padding:"11px 18px",borderRadius:9,fontSize:14,fontWeight:700,cursor:fetching?"not-allowed":"pointer",opacity:fetching?.6:1,display:"flex",alignItems:"center",gap:8,flexShrink:0}} onClick={onFetchScores} disabled={fetching}>
          {fetching?<><span style={S.spinner}/>Recherche...</>:"🔄 Récupérer"}
        </button>
      </div>
      {(()=>{
        const tk=todayKey();
        const tmKey=(()=>{const d=new Date();d.setDate(d.getDate()+1);const tm=new Date(d.toLocaleString("en-US",{timeZone:TZ}));return `${tm.getFullYear()}-${tm.getMonth()}-${tm.getDate()}`;})();
        const upcomingMatches=BASE_MATCHES.filter(m=>m.phase===filterPhase&&(dayKey(m.kickoff)===tk||dayKey(m.kickoff)===tmKey)).sort((a,b)=>new Date(a.kickoff)-new Date(b.kickoff));
        if(upcomingMatches.length===0)return null;
        return(
          <div style={{background:"linear-gradient(135deg,#7a0000,#C1272D)",border:"2px solid #FFD700",borderRadius:14,padding:16,marginBottom:20}}>
            <div style={{fontFamily:"Impact,sans-serif",fontSize:16,color:"#FFD700",letterSpacing:".1em",marginBottom:12}}>⚡ MATCHS AUJOURD'HUI & DEMAIN ({upcomingMatches.length})</div>
            {upcomingMatches.map(m=>{
              const started=isLocked(m.kickoff);
              const done=local[m.id]?.home!==undefined&&local[m.id]?.home!=='';
              return(
                <div key={m.id} style={{background:done?"rgba(0,80,0,0.4)":"rgba(0,0,0,0.3)",borderRadius:10,padding:"12px 14px",marginBottom:8,opacity:!started?.7:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                    <span style={{fontSize:11,color:"#FFD700",textTransform:"uppercase",fontWeight:700}}>{m.group||m.phase}</span>
                    <span style={{fontSize:11,color:started?"#4ade80":"#fbbf24",fontWeight:600}}>{started?"🔒":"⏰"} {fmtHour(m.kickoff)}</span>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{flex:1,fontSize:13,fontWeight:700,color:"#fff",textAlign:"center"}}>{m.home}</span>
                    <input style={{background:started?"rgba(0,0,0,0.4)":"rgba(100,100,100,0.2)",border:`2px solid ${started?"#FFD700":"#666"}`,color:started?"#fff":"#666",width:48,height:42,textAlign:"center",borderRadius:8,fontSize:20,fontWeight:900,outline:"none"}} type="number" min="0" max="20" placeholder={started?"?":"–"} disabled={!started} value={local[m.id]?.home??""} onChange={e=>setLocal(l=>({...l,[m.id]:{...l[m.id],home:e.target.value}}))}/>
                    <span style={{color:"#FFD700",fontWeight:900,fontSize:20}}>–</span>
                    <input style={{background:started?"rgba(0,0,0,0.4)":"rgba(100,100,100,0.2)",border:`2px solid ${started?"#FFD700":"#666"}`,color:started?"#fff":"#666",width:48,height:42,textAlign:"center",borderRadius:8,fontSize:20,fontWeight:900,outline:"none"}} type="number" min="0" max="20" placeholder={started?"?":"–"} disabled={!started} value={local[m.id]?.away??""} onChange={e=>setLocal(l=>({...l,[m.id]:{...l[m.id],away:e.target.value}}))}/>
                    <span style={{flex:1,fontSize:13,fontWeight:700,color:"#fff",textAlign:"center"}}>{m.away}</span>
                  </div>
                  {done&&<div style={{textAlign:"center",fontSize:11,color:"#4ade80",marginTop:4}}>✓ Résultat enregistré</div>}
                </div>
              );
            })}
            <button style={{background:"linear-gradient(135deg,#B8962E,#8B6914)",color:"#000",border:"none",padding:"13px",borderRadius:10,fontSize:15,fontWeight:800,cursor:"pointer",width:"100%",marginTop:4}} onClick={()=>onSave(local)}>💾 Valider ces résultats</button>
          </div>
        );
      })()}
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:16}}>
        {PHASES.map(ph=><button key={ph} style={{...S.phaseBtn,...(filterPhase===ph?S.phaseBtnOn:{})}} onClick={()=>setFilterPhase(ph)}>{ph}</button>)}
      </div>
      {filterPhase==="Groupes"&&(
        <div style={{...S.card,marginBottom:14}}>
          <label style={{fontSize:13,color:"#FFD700",display:"block",marginBottom:8}}>🏆 Champion officiel</label>
          <input style={{background:"#005c26",border:"1px solid #B8962E44",color:"#f1f5f9",padding:"8px 12px",borderRadius:8,fontSize:15,outline:"none",width:"100%"}} placeholder="Équipe championne" value={local.champion||""} onChange={e=>setLocal(l=>({...l,champion:e.target.value}))}/>
        </div>
      )}
      {filtered.map(m=>{
        const done=local[m.id]?.home!==undefined&&local[m.id]?.home!=="";
        return(
          <div key={m.id} style={{background:done?"#004d1a":"#007a3d",border:`1px solid ${done?"#FFD700":"#B8962E44"}`,borderRadius:10,padding:"12px 14px",marginBottom:8}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
              <span style={{fontSize:11,color:"#FFD700",textTransform:"uppercase"}}>{m.group||m.phase}</span>
              <span style={{fontSize:11,color:"#fbbf24"}}>⏰ {fmtHour(m.kickoff)}</span>
              {done&&<span style={{background:"#B8962E",color:"#000",fontSize:10,padding:"2px 6px",borderRadius:8,fontWeight:700}}>✓</span>}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{flex:1,fontSize:13,fontWeight:600,color:"#fff",textAlign:"center"}}>{m.home}</span>
              <input style={S.scoreInput} type="number" min="0" max="20" placeholder="–" value={local[m.id]?.home??""} onChange={e=>set(m.id,"home",e.target.value)}/>
              <span style={{color:"#B8962E",fontWeight:700,fontSize:18}}>–</span>
              <input style={S.scoreInput} type="number" min="0" max="20" placeholder="–" value={local[m.id]?.away??""} onChange={e=>set(m.id,"away",e.target.value)}/>
              <span style={{flex:1,fontSize:13,fontWeight:600,color:"#fff",textAlign:"center"}}>{m.away}</span>
            </div>
          </div>
        );
      })}
      <button style={{...S.btn,marginTop:8}} onClick={()=>onSave(local)}>💾 Sauvegarder</button>
    </div>
  );
}

function ScoreDetails({players,pronos,results,filterPhase,setFilterPhase}){
  const PTS={5:"#B8962E",3:"#2563eb",2:"#7c3aed",1:"#d97706",0:"#dc2626"};
  const PHASES=["Groupes","Seizièmes"];
  const filtered=[...BASE_MATCHES.filter(m=>m.phase===filterPhase&&results[m.id]?.home!==undefined)].reverse();
  return(
    <div style={{marginTop:32}}>
      <h3 style={{fontSize:15,fontWeight:700,color:"#FFD700",marginBottom:12}}>Détail par match</h3>
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:16}}>
        {PHASES.map(ph=><button key={ph} style={{...S.phaseBtn,...(filterPhase===ph?S.phaseBtnOn:{})}} onClick={()=>setFilterPhase(ph)}>{ph}</button>)}
      </div>
      {filtered.length===0?<p style={{color:"#B8962E",textAlign:"center"}}>Aucun résultat.</p>:filtered.map(m=>{
        const res=results[m.id];
        return(
          <div key={m.id} style={{...S.card,marginBottom:8}}>
            <div style={{display:"flex",justifyContent:"space-between",fontWeight:700,marginBottom:10,fontSize:14}}>
              <span style={{color:"#fff"}}>{m.home} {res.home}–{res.away} {m.away}</span>
              <span style={{color:"#FFD700",fontSize:12}}>{m.group||m.phase}</span>
            </div>
            {players.map(p=>{
              const pro=pronos[p]?.[m.id];
              const pts=scoreProno(pro,res,m.phase!=="Groupes");
              return(
                <div key={p} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0"}}>
                  <span style={{flex:1,fontSize:13,color:"#d1fae5"}}>{p}</span>
                  <span style={{fontSize:13,fontWeight:700,minWidth:40,textAlign:"center",color:"#fff"}}>{pro?`${pro.home}–${pro.away}`:"—"}</span>
                  <span style={{fontSize:12,fontWeight:700,color:"#fff",padding:"2px 8px",borderRadius:10,minWidth:40,textAlign:"center",background:pts!==null?PTS[pts]:"#374151"}}>{pts!==null?`${pts} pt${pts>1?"s":""}`:"—"}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
