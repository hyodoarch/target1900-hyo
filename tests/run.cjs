"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const Core=require("../study-core.js");
const html=fs.readFileSync(path.join(__dirname,"../index.html"),"utf8");
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const dataset=require("../data/target1900.js");
const words=dataset.words;
const DAY=Core.DAY;
const now=Date.UTC(2026,9,1,12);
let passed=0;
function test(name,fn){fn();passed++;console.log("ok "+passed+" - "+name);}
function context(extra={}) {
  return Object.assign({eventId:"event-1",sessionId:"session-1",wordNo:1,expression:"create",
    now,dayKey:"2026-10-01",result:"recalled",latencyMs:12000,
    audioEnabled:false,timingValid:true,isRetry:false,isPlanReview:false},extra);
}
function fresh(legacy={}){return Core.migrate(legacy,now);}
function observation(extra={}) {
  return Object.assign({wordNo:1,result:"recalled",isRetry:false,timingValid:true,
    latencyMs:8000,audioEnabled:false,elapsedSincePreviousMs:DAY},extra);
}
function makeApp(initial={},sharedMap=null,datasetAvailable=true) {
  const clock={wall:now,mono:0};
  const storage=sharedMap || new Map(Object.entries(initial));
  let failWrites=false,id=0,rafId=0,timeoutId=0;
  const frames=new Map(),timeouts=new Map(),ids=new Map(),events=new Map(),downloads=[],revoked=[];
  class Element {
    constructor(tag="div",elementId=""){
      this.tagName=tag;this.id=elementId;this.style={};this.dataset={};this.children=[];
      this.value="";this.checked=false;this.hidden=false;this.disabled=false;this._className="";this._html="";
      this.classList={
        contains:name=>this._className.split(/\s+/).includes(name),
        add:name=>{if(!this.classList.contains(name))this._className+= " "+name;},
        remove:name=>{this._className=this._className.split(/\s+/).filter(x=>x!==name).join(" ");},
        toggle:(name,force)=>{const on=force===undefined?!this.classList.contains(name):force;
          if(on)this.classList.add(name);else this.classList.remove(name);return on;}
      };
    }
    get className(){return this._className;}
    set className(v){this._className=v;}
    get innerHTML(){return this._html;}
    set innerHTML(v){
      this._html=v;this.children=[];
      for(const match of v.matchAll(/id="([^"]+)"/g)) {
        const el=new Element("button",match[1]);ids.set(match[1],el);
      }
    }
    get textContent(){return this._text || "";}
    set textContent(v){this._text=String(v);this.children=[];}
    appendChild(child){this.children.push(child);return child;}
    remove(){}
    addEventListener(type,callback){this["on"+type]=callback;}
    querySelector(selector){
      if(!this._html.includes(selector.slice(1)))throw new Error("Missing selector "+selector);
      if(!this._selectors)this._selectors={};
      return this._selectors[selector] || (this._selectors[selector]=new Element());
    }
    click(){if(this.tagName==="a")downloads.push({href:this.href,filename:this.download});else if(this.onclick)this.onclick();}
  }
  for(const m of html.split("<script")[0].matchAll(/id="([^"]+)"/g))ids.set(m[1],new Element("div",m[1]));
  const views=["homeView","studyView","mistakeView","statsView"].map(id=>ids.get(id));
  views[0].className="view active";
  for(const v of views.slice(1))v.className="view";
  const nav=views.map(v=>{const b=new Element("button");b.dataset.view=v.id;return b;});
  const document={hidden:false,body:new Element("body"),
    getElementById:id=>{if(!ids.has(id))throw new Error("Missing element "+id);return ids.get(id);},
    querySelectorAll:selector=>selector===".view"?views:selector===".nav button"?nav:[],
    createElement:tag=>new Element(tag),createTextNode:text=>({textContent:text}),
    createDocumentFragment:()=>new Element("fragment"),
    addEventListener:(type,callback)=>events.set(type,callback)};
  class ClockDate extends Date {
    constructor(...args){super(...(args.length?args:[clock.wall]));}
    static now(){return clock.wall;}
  }
  const blobList=[];
  class MockBlob {
    constructor(parts,options){this.parts=parts;this.type=options.type;}
  }
  const URL={createObjectURL:blob=>{blobList.push(blob);return "blob:"+blobList.length;},
    revokeObjectURL:url=>revoked.push(url)};
  const window={speechSynthesis:{cancel(){},speak(){},getVoices:()=>[]}};
  const localStorage={getItem:key=>storage.has(key)?storage.get(key):null,
    setItem:(key,value)=>{if(failWrites)throw new Error("Quota exceeded");storage.set(key,value);}};
  const requestAnimationFrame=fn=>{const n=++rafId;frames.set(n,fn);return n;};
  const cancelAnimationFrame=n=>frames.delete(n);
  const setTimeout=(fn,delay)=>{const n=++timeoutId;timeouts.set(n,{fn,delay});return n;};
  const clearTimeout=n=>timeouts.delete(n);
  const args=["StudyCore","window","document","localStorage","performance","requestAnimationFrame",
    "cancelAnimationFrame","setTimeout","clearTimeout","Blob","URL","crypto","confirm","Date","SpeechSynthesisUtterance","speechSynthesis","Target1900Dataset"];
  const access="\nreturn {startSession,revealAnswer,switchView,elapsedTime,refreshAll,"+
    "getBundle:()=>BUNDLE,getPending:()=>answerPending,getWord:()=>currentWord,getToken:()=>cardToken};";
  const app=new Function(...args,script+access)(Core,window,document,localStorage,
    {now:()=>clock.mono},requestAnimationFrame,cancelAnimationFrame,setTimeout,clearTimeout,MockBlob,URL,
    {randomUUID:()=>"test-"+(++id)},()=>true,ClockDate,function(text){this.text=text;},window.speechSynthesis,datasetAvailable?dataset:undefined);
  return {app,ids,storage,downloads,blobList,revoked,timeouts,
    advance(ms){clock.wall+=ms;clock.mono+=ms;const callbacks=[...frames.values()];frames.clear();for(const fn of callbacks)fn();},
    visibility(hidden){document.hidden=hidden;events.get("visibilitychange")();},
    failWrites(value){failWrites=value;}};
}
test("教材1900語を別ファイルから読み込み、番号と重複を確認",()=>{
  assert.ok(html.includes('src="data/target1900.js"'));assert.ok(!script.includes("const EMBEDDED_WORDS"));
  assert.equal(words.length,1900);assert.equal(new Set(words.map(w=>w.no)).size,1900);
  assert.equal(words[0].word,"create");assert.equal(words[1899].word,"zealous");
});
test("旧累計・復習予定を保持し、過去の履歴を作らない",()=>{
  const legacy={state:{"1":{attempts:9,corrects:6,lapses:3,lastSeen:now-DAY,due:now+7*DAY,
    lastLatency:3000,lastIntervalDays:7,schedulerVersion:3}},daily:{"2026-09-30":{attempts:9,corrects:6,wrong:3}}};
  const b=fresh(legacy);
  assert.equal(b.state["1"].due,legacy.state["1"].due);assert.equal(b.state["1"].attempts,9);
  assert.equal(b.state["1"].lastLatency,3000);assert.equal(b.history.length,0);
  assert.equal(b.meta.legacyTotals.attempts,9);assert.deepEqual(b.daily,legacy.daily);
});
test("15秒の正解を正解として記録し、採点時間を含めない",()=>{
  const b=Core.recordAnswer(fresh(),context({latencyMs:15000}));
  assert.equal(b.state["1"].corrects,1);assert.equal(b.state["1"].lapses,0);
  assert.equal(b.history[0].latencyMs,15000);assert.equal(b.state["1"].due,now+DAY);
});
test("曖昧な回答は正解・誤答と別集計",()=>{
  const b=Core.recordAnswer(fresh(),context({result:"partial"}));
  assert.equal(b.state["1"].partials,1);assert.equal(b.state["1"].corrects,0);assert.equal(b.state["1"].lapses,0);
  assert.equal(b.daily["2026-10-01"].partials,1);assert.equal(b.daily["2026-10-01"].wrong,0);
});
test("誤答を翌日へ予定し、計画復習を集計",()=>{
  const b=Core.recordAnswer(fresh(),context({result:"notRecalled",isPlanReview:true}));
  assert.equal(b.state["1"].due,now+DAY);assert.equal(b.state["1"].lapses,1);
  assert.equal(b.daily["2026-10-01"].planReviews,1);
});
test("二重記録を拒否し、入力データを変更しない",()=>{
  const original=fresh();const snapshot=JSON.stringify(original);
  const b=Core.recordAnswer(original,context());
  assert.equal(JSON.stringify(original),snapshot);assert.equal(Core.recordAnswer(b,context()),null);
});
test("日を空けた正解で復習間隔を延長",()=>{
  const b=fresh({state:{"1":{attempts:3,corrects:3,lastSeen:now-3*DAY,due:now,
    lastResult:"correct",lastIntervalDays:3}}});
  const next=Core.recordAnswer(b,context());
  assert.ok(next.state["1"].lastIntervalDays>3);assert.ok(next.state["1"].lastIntervalDays<8);
});
test("同日内の正解では間隔を延ばさない",()=>{
  const state=Core.normalizeState({attempts:3,lastSeen:now-10000,due:now+2*DAY,lastIntervalDays:2,lastResult:"correct"});
  assert.equal(Core.chooseSchedule(state,"recalled",context(),[]).due,state.due);
});
test("誤答直後の再テストは元の翌日予定を保持",()=>{
  const first=Core.recordAnswer(fresh(),context({result:"notRecalled"}));
  const retry=Core.recordAnswer(first,context({eventId:"retry",isRetry:true,now:now+20000}));
  assert.equal(retry.state["1"].due,first.state["1"].due);assert.equal(retry.state["1"].successStreak,0);
  assert.equal(retry.history[1].isRetry,true);
});
test("本人の間隔復習の成功率を使い、履歴不足時は共通基準",()=>{
  assert.equal(Core.personalFactor([observation()]),1);
  const success=Array.from({length:10},()=>observation());
  const failure=Array.from({length:10},()=>observation({result:"notRecalled"}));
  assert.ok(Core.personalFactor(success)>Core.personalFactor(failure));
  assert.equal(Core.personalFactor(success.map(e=>({...e,isRetry:true}))),1);
});
test("速度の補助調整は本人・同じ音声条件の履歴で最大5%",()=>{
  const history=Array.from({length:5},()=>observation());
  assert.equal(Core.speedFactor(history,context({latencyMs:2000})),1.05);
  assert.equal(Core.speedFactor(history,context({latencyMs:20000})),0.95);
  assert.equal(Core.speedFactor(history,context({latencyMs:2000,audioEnabled:true})),1);
  assert.equal(Core.speedFactor(history,context({latencyMs:2000,timingValid:false})),1);
});
test("CSVの日本語・引用符・改行と空履歴",()=>{
  const csv=Core.toCSV([{expression:'語, "引用"\n次',result:"partial"}]);
  assert.ok(csv.includes('"語, ""引用""\n次"'));assert.equal(Core.toCSV([]).split("\r\n").length,2);
  assert.ok(Core.toCSV([{expression:"=1+1"}]).includes("'=1+1"));
});
test("JSONは累計・設定・履歴と版を保持し、元データを変更しない",()=>{
  const b=Core.recordAnswer(fresh(),context());const before=JSON.stringify(b);
  const output=JSON.parse(Core.exportJSON(b,now));
  assert.equal(output.schemaVersion,4);assert.deepEqual(output.history,b.history);
  assert.equal(JSON.stringify(b),before);assert.equal(output.dataset.setId,"target1900");
});
test("画面で9秒超も出題を続け、採点を確定するまで保存しない",()=>{
  const m=makeApp();m.app.startSession();m.advance(15000);
  assert.equal(m.app.getBundle().history.length,0);assert.equal(m.app.getPending(),false);
  assert.ok(m.ids.get("timerText").textContent.includes("15.0"));
  m.app.revealAnswer();m.advance(40000);
  assert.equal(m.app.getBundle().history.length,0);
  m.ids.get("confirmRight").onclick();
  assert.equal(m.app.getBundle().history.length,1);assert.equal(m.app.getBundle().history[0].latencyMs,15000);
});
test("採点ボタンの古いイベントで次の問題を二重採点しない",()=>{
  const m=makeApp();m.app.startSession();m.advance(5000);m.app.revealAnswer();
  const stale=m.ids.get("confirmPartial").onclick;stale();stale();
  assert.equal(m.app.getBundle().history.length,1);assert.equal(m.app.getBundle().state["1"].partials,1);
});
test("別アプリに移った時間を除外し、中断した時間は補助調整から除外",()=>{
  const m=makeApp();m.app.startSession();m.advance(4000);m.visibility(true);
  m.advance(60000);m.visibility(false);m.advance(3000);m.app.revealAnswer();
  m.ids.get("confirmRight").onclick();const e=m.app.getBundle().history[0];
  assert.equal(e.latencyMs,7000);assert.equal(e.timingValid,false);
});
test("別の画面で過ごした時間も除外する",()=>{
  const m=makeApp();m.app.startSession();m.advance(2000);m.app.switchView("homeView");
  m.advance(20000);m.app.switchView("studyView");m.advance(3000);m.app.revealAnswer();
  m.ids.get("confirmRight").onclick();assert.equal(m.app.getBundle().history[0].latencyMs,5000);
});
test("保存失敗時は採点を進めず、再試行で1回だけ保存",()=>{
  const m=makeApp();m.app.startSession();m.advance(4000);m.app.revealAnswer();
  const token=m.app.getToken();m.failWrites(true);m.ids.get("confirmRight").onclick();
  assert.equal(m.app.getBundle().history.length,0);assert.equal(m.app.getToken(),token);
  assert.equal(m.app.getPending(),true);assert.equal(m.ids.get("saveStatus").hidden,false);
  m.failWrites(false);m.ids.get("confirmRight").onclick();assert.equal(m.app.getBundle().history.length,1);
});
test("再読み込み後も回答履歴と累計が残る",()=>{
  const m=makeApp();m.app.startSession();m.advance(3000);m.app.revealAnswer();
  m.ids.get("confirmWrong").onclick();const reloaded=makeApp({},m.storage);
  assert.equal(reloaded.app.getBundle().history.length,1);assert.equal(reloaded.app.getBundle().state["1"].lapses,1);
});
test("JSON・CSVのダウンロードは記録を消さず、URLをすぐ解放しない",()=>{
  const m=makeApp();m.app.startSession();m.advance(3000);m.app.revealAnswer();m.ids.get("confirmRight").onclick();
  const before=JSON.stringify(m.app.getBundle());m.ids.get("exportBtn").onclick();m.ids.get("exportCsvBtn").onclick();
  assert.equal(m.downloads.length,2);assert.ok(m.downloads[0].filename.endsWith(".json"));
  assert.ok(m.downloads[1].filename.endsWith(".csv"));assert.equal(m.revoked.length,0);
  assert.ok([...m.timeouts.values()].some(t=>t.delay===60000));
  assert.equal(JSON.stringify(m.app.getBundle()),before);
  assert.equal(JSON.parse(m.blobList[0].parts[0]).history.length,1);
  assert.ok(m.blobList[1].parts[0].startsWith("\uFEFF"));
});
test("旧キーから移行し、旧データを保持する",()=>{
  const raw=JSON.stringify({"1":{attempts:8,corrects:5,lapses:3,due:now+DAY,lastSeen:now-2*DAY}});
  const m=makeApp({"target1900_state_v2":raw});
  assert.equal(m.app.getBundle().state["1"].attempts,8);assert.equal(m.app.getBundle().history.length,0);
  assert.equal(m.storage.get("target1900_state_v2"),raw);assert.ok(m.storage.has("target1900_bundle_v4"));
});
test("壊れた保存データを上書きせず、JSONで元データを取り出せる",()=>{
  const raw="{bad json";const m=makeApp({"target1900_bundle_v4":raw});
  assert.equal(m.storage.get("target1900_bundle_v4"),raw);
  m.app.startSession();m.app.revealAnswer();m.ids.get("confirmRight").onclick();
  assert.equal(m.storage.get("target1900_bundle_v4"),raw);
  m.ids.get("exportBtn").onclick();
  assert.equal(JSON.parse(m.blobList[0].parts[0]).unreadableStoredData.target1900_bundle_v4,raw);
});
test("明示的なリセット後に未確定の回答が復活しない",()=>{
  const m=makeApp();m.app.startSession();m.app.revealAnswer();
  const stale=m.ids.get("confirmWrong").onclick;m.ids.get("resetBtn").onclick();stale();
  assert.equal(m.app.getBundle().history.length,0);assert.equal(m.app.getWord(),null);
  assert.equal(words.length,1900);
});
test("教材の読み込み失敗でも記録を消さず、学習を開始しない",()=>{
  const raw=JSON.stringify({"1":{attempts:3,corrects:2,lapses:1,due:now+DAY}});
  const m=makeApp({"target1900_state_v2":raw},null,false);
  assert.equal(m.ids.get("startBtn").disabled,true);
  assert.equal(m.ids.get("saveStatus").hidden,false);
  assert.equal(m.app.getBundle().state["1"].attempts,3);
  assert.equal(m.storage.get("target1900_state_v2"),raw);
});
console.log(passed+" tests passed. DOMと保存・ダウンロードはモック。Safari実機検証ではありません。");
