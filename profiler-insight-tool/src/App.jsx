import React, { Profiler, useCallback, useMemo, useState } from "react";
import Counter from "./components/Counter";
import FilterList from "./components/FilterList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ProfilerPanel from "./components/ProfilerPanel";
import { recordEvent } from "./utils/profilerStore";
import names from "./names"; // 1000 names array you have

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions,
) {
  // record minimal useful info
  recordEvent({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggle = useCallback(
    () => setTheme((t) => (t === "light" ? "dark" : "light")),
    [],
  );
  const [filter, setFilter] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const onIncrement = useCallback(() => {
    // small no-op to demonstrate callback prop
  }, []);

  // small list slice to keep UI responsive
  const items = useMemo(() => names.slice(0, 1000), []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Profiler Insights Tool</h2>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 12 }}
      >
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input
              placeholder="Filter..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button onClick={() => setRefreshKey((k) => k + 1)}>
              Refresh Panel
            </button>
          </div>

          <Profiler id="Counter" onRender={onRenderCallback}>
            <Counter onIncrement={onIncrement} />
          </Profiler>

          <div style={{ height: 12 }} />

          <Profiler id="ThemeSwitcher" onRender={onRenderCallback}>
            <ThemeSwitcher theme={theme} toggle={toggle} />
          </Profiler>

          <div style={{ height: 12 }} />

          <Profiler id="FilterList" onRender={onRenderCallback}>
            <FilterList items={items} filter={filter} />
          </Profiler>
        </div>

        <ProfilerPanel refreshKey={refreshKey} />
      </div>
    </div>
  );
}
