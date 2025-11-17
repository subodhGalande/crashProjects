// simple in-memory aggregator for profiler events
const store = {
  events: [], // raw events
  byId: {}, // aggregated data
};

export function recordEvent(event) {
  // event: { id, phase, actualDuration, baseDuration, startTime, commitTime, interactions, changes }
  store.events.push(event);
  const id = event.id;
  if (!store.byId[id]) {
    store.byId[id] = {
      id,
      renders: 0,
      totalDuration: 0,
      lastDuration: 0,
      lastPropsDiff: null,
      events: [],
    };
  }
  const rec = store.byId[id];
  rec.renders += 1;
  rec.totalDuration += event.actualDuration;
  rec.lastDuration = event.actualDuration;
  rec.events.push(event);
}

export function getSummary() {
  const entries = Object.values(store.byId).map((r) => ({
    id: r.id,
    renders: r.renders,
    avgDuration: r.renders ? r.totalDuration / r.renders : 0,
    lastDuration: r.lastDuration,
    events: r.events.slice().reverse().slice(0, 5),
  }));
  // sort by lastDuration desc
  entries.sort((a, b) => b.lastDuration - a.lastDuration);
  return { entries, raw: store.events.slice().reverse() };
}

export function clearStore() {
  store.events = [];
  store.byId = {};
}
