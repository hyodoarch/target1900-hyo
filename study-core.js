/* 学習記録と復習の初期実装。ブラウザーとNode.jsの両方で利用できます。 */
(function(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.StudyCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function() {
  "use strict";
  const DAY = 86400000;
  const SCHEMA_VERSION = 4;
  const SCHEDULER_VERSION = 4;
  const DATASET = {setId:"target1900", version:"legacy-1900-v1", sourceStatus:"unconfirmed"};
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const clone = value => JSON.parse(JSON.stringify(value));
  const number = value => Number.isFinite(value) && value >= 0 ? value : 0;
  const iso = value => Number.isFinite(value) && value > 0 ? new Date(value).toISOString() : null;
  function median(values) {
    if (!values.length) return null;
    const sorted = values.slice().sort((a,b) => a-b);
    const mid = Math.floor(sorted.length/2);
    return sorted.length%2 ? sorted[mid] : (sorted[mid-1]+sorted[mid])/2;
  }
  function defaultState() {
    return {stage:-1, due:0, lapses:0, attempts:0, corrects:0, partials:0,
      lastSeen:0, lastResult:"", lastLatency:null, stabilityDays:0,
      lastIntervalDays:0, successStreak:0, schedulerVersion:SCHEDULER_VERSION};
  }
  function normalizeState(value) {
    const s = Object.assign(defaultState(), value || {});
    for (const k of ["attempts","corrects","lapses","partials","successStreak"]) s[k] = number(s[k]);
    const oldStages = [1,1,3,7,14,30,60,120];
    const oldInterval = oldStages[clamp(Number.isInteger(s.stage)?s.stage:0,0,7)];
    const interval = number(s.lastIntervalDays) || number(s.stabilityDays) || (s.attempts ? oldInterval : 0);
    s.lastIntervalDays = interval;
    s.stabilityDays = interval;
    // 旧方式の復習予定と累計を保持する。過去の個別回答は作らない。
    if (!Number.isFinite(s.due) || s.due < 0) s.due = number(s.lastSeen) + interval*DAY;
    s.schedulerVersion = SCHEDULER_VERSION;
    return s;
  }
  function migrate(legacy, now) {
    const input = clone(legacy || {});
    const state = {};
    const legacyTotals = {attempts:0, corrects:0, wrong:0, partials:0};
    for (const [id,value] of Object.entries(input.state || {})) {
      state[id] = normalizeState(value);
      legacyTotals.attempts += state[id].attempts;
      legacyTotals.corrects += state[id].corrects;
      legacyTotals.wrong += state[id].lapses;
      legacyTotals.partials += state[id].partials;
    }
    return {schemaVersion:SCHEMA_VERSION, schedulerVersion:SCHEDULER_VERSION,
      dataset:clone(DATASET), state, daily:input.daily || {}, settings:input.settings || {},
      plan:input.plan || {}, history:[],
      meta:{historyStartedAt:iso(now), legacyTotals}};
  }
  function validateBundle(bundle) {
    return !!bundle && bundle.schemaVersion === SCHEMA_VERSION &&
      bundle.state && typeof bundle.state === "object" && !Array.isArray(bundle.state) &&
      bundle.daily && typeof bundle.daily === "object" && !Array.isArray(bundle.daily) &&
      bundle.settings && typeof bundle.settings === "object" &&
      bundle.plan && typeof bundle.plan === "object" &&
      Array.isArray(bundle.history) && bundle.meta && typeof bundle.meta === "object" &&
      bundle.meta.legacyTotals && Number.isFinite(bundle.meta.legacyTotals.attempts);
  }
  function spaced(event) {
    return !event.isRetry && Number.isFinite(event.elapsedSincePreviousMs) &&
      event.elapsedSincePreviousMs >= DAY/2;
  }
  function personalFactor(history) {
    const observations = history.filter(spaced).slice(-30);
    if (observations.length < 8) return 1;
    const rate = observations.filter(e => e.result === "recalled").length / observations.length;
    return clamp(1 + rate - 0.8, 0.8, 1.2);
  }
  function latencyBaseline(history, audioEnabled, speechRate) {
    return history.filter(e => spaced(e) && e.result === "recalled" &&
      e.timingValid !== false && !(e.audioReplayCount > 0) && e.audioEnabled === audioEnabled &&
      (!audioEnabled || e.speechRate === speechRate) &&
      Number.isFinite(e.latencyMs) && e.latencyMs > 0).slice(-50).map(e => e.latencyMs);
  }
  function speedFactor(history, context) {
    if (context.timingValid === false || context.audioReplayCount > 0 || !(context.latencyMs > 0)) return 1;
    const values = latencyBaseline(history, context.audioEnabled, context.speechRate);
    if (values.length < 5) return 1;
    const ratio = context.latencyMs / median(values);
    return ratio < 0.8 ? 1.05 : ratio > 1.25 ? 0.95 : 1;
  }
  function chooseSchedule(state, result, context, history) {
    const now = context.now;
    const previous = number(state.lastIntervalDays) || 1;
    const elapsedDays = state.lastSeen > 0 ? Math.max(0,(now-state.lastSeen)/DAY) : null;
    let days;
    if (result === "notRecalled") days = 1;
    else if (result === "partial") days = clamp(previous*0.5, 1, 3);
    else if (context.isRetry || (elapsedDays !== null && elapsedDays < 0.5)) {
      // 同日内の正解で間隔を延ばさない。直前の回答で決めた予定を保持する。
      const due = state.due > now ? state.due : now + DAY;
      return {days:previous, due};
    } else if (elapsedDays === null || ["wrong","timeout","partial","notRecalled"].includes(state.lastResult)) {
      days = 1;
    } else {
      const wordHistory = history.filter(e => e.wordNo === context.wordNo && spaced(e)).slice(-10);
      const wordRate = wordHistory.length >= 3 ?
        wordHistory.filter(e => e.result === "recalled").length / wordHistory.length : 1;
      const wordFactor = wordHistory.length >= 3 ? clamp(0.85 + 0.2*wordRate, 0.85, 1.05) : 1;
      const observed = Math.min(previous, Math.max(1,elapsedDays));
      days = observed*2*personalFactor(history)*wordFactor*speedFactor(history,context);
    }
    days = Math.round(clamp(days,1,180)*10)/10;
    return {days, due:now+days*DAY};
  }
  function recordAnswer(bundle, context) {
    if (!validateBundle(bundle)) throw new Error("保存形式が不正です");
    if (!["recalled","partial","notRecalled"].includes(context.result)) throw new Error("採点結果が不正です");
    if (!context.eventId || !Number.isFinite(context.now) || !Number.isFinite(context.latencyMs) ||
      context.latencyMs < 0 || !Number.isInteger(context.wordNo) || context.wordNo < 1) {
      throw new Error("回答情報が不正です");
    }
    if (bundle.history.some(e => e.eventId === context.eventId)) return null;
    const next = clone(bundle);
    const before = normalizeState(next.state[String(context.wordNo)]);
    const schedule = chooseSchedule(before, context.result, context, bundle.history);
    const s = clone(before);
    s.attempts++;
    if (context.result === "recalled") {
      s.corrects++;
      // 再出題の正解を連続した間隔復習の成功として扱わない。
      if (!context.isRetry && (before.lastSeen === 0 || context.now-before.lastSeen >= DAY/2)) {
        s.successStreak = before.successStreak + 1;
      }
    } else {
      if (context.result === "partial") s.partials++;
      else s.lapses++;
      s.successStreak = 0;
    }
    s.lastSeen = context.now;
    s.lastResult = context.result === "recalled" ? "correct" :
      context.result === "partial" ? "partial" : "wrong";
    s.lastLatency = Math.round(context.latencyMs);
    s.lastTimingValid = context.timingValid !== false;
    s.lastIntervalDays = schedule.days;
    s.stabilityDays = schedule.days;
    s.due = schedule.due;
    s.schedulerVersion = SCHEDULER_VERSION;
    next.state[String(context.wordNo)] = s;
    const daily = next.daily[context.dayKey] || {attempts:0,corrects:0,wrong:0,partials:0,planReviews:0};
    daily.attempts = number(daily.attempts)+1;
    daily.corrects = number(daily.corrects)+(context.result === "recalled" ? 1 : 0);
    daily.partials = number(daily.partials)+(context.result === "partial" ? 1 : 0);
    daily.wrong = number(daily.wrong)+(context.result === "notRecalled" ? 1 : 0);
    daily.planReviews = number(daily.planReviews)+(context.isPlanReview && !context.isRetry ? 1 : 0);
    next.daily[context.dayKey] = daily;
    next.history.push({
      eventId:context.eventId, sessionId:context.sessionId,
      setId:DATASET.setId, setVersion:DATASET.version,
      entryId:DATASET.setId+":"+context.wordNo, entryType:"word", wordNo:context.wordNo,
      expression:context.expression, answeredAt:iso(context.now),
      result:context.result, latencyMs:Math.round(context.latencyMs),
      previousAnsweredAt:iso(before.lastSeen),
      elapsedSincePreviousMs:before.lastSeen > 0 ? Math.max(0,context.now-before.lastSeen) : null,
      previousScheduledDue:iso(before.due), nextScheduledDue:iso(schedule.due),
      presentationMode:"text-with-optional-audio", audioEnabled:!!context.audioEnabled,
      speechRate:context.speechRate ?? null, audioReplayCount:context.audioReplayCount || 0,
      timingValid:context.timingValid !== false, isRetry:!!context.isRetry,
      isPlanReview:!!context.isPlanReview, schedulerVersion:SCHEDULER_VERSION
    });
    next.schedulerVersion = SCHEDULER_VERSION;
    return next;
  }
  function csvCell(value) {
    let text = value === null || value === undefined ? "" : String(value);
    if (typeof value === "string" && /^[\s]*[=+\-@]/.test(text)) text = "'"+text;
    return '"'+text.replace(/"/g,'""')+'"';
  }
  function toCSV(history) {
    const columns = ["eventId","sessionId","setId","setVersion","entryId","entryType","wordNo",
      "expression","answeredAt","result","latencyMs","timingValid","previousAnsweredAt",
      "elapsedSincePreviousMs","previousScheduledDue","nextScheduledDue",
      "presentationMode","audioEnabled","speechRate","audioReplayCount","isRetry","isPlanReview","schedulerVersion"];
    return [columns.map(csvCell).join(","),
      ...history.map(event => columns.map(key => csvCell(event[key])).join(","))].join("\r\n")+"\r\n";
  }
  function exportJSON(bundle, now) {
    return JSON.stringify(Object.assign({}, bundle, {exportedAt:iso(now)}), null, 2);
  }
  return {DAY,SCHEMA_VERSION,SCHEDULER_VERSION,DATASET,median,normalizeState,migrate,
    validateBundle,chooseSchedule,personalFactor,speedFactor,recordAnswer,toCSV,exportJSON};
});
