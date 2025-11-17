import React from "react";
import { getSummary, clearStore } from "../utils/profilerStore";

export default function ProfilerPanel({ refreshKey }) {
  const [data, setData] = React.useState(() => getSummary());

  // refresh whenever parent asks (passing refreshKey)
  React.useEffect(() => setData(getSummary()), [refreshKey]);

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(getSummary(), null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "profiler-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ border: "1px solid #e5e7eb", padding: 12, borderRadius: 8 }}>
      <h3>Profiler Panel</h3>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <button onClick={() => setData(getSummary())}>Refresh</button>
        <button
          onClick={() => {
            clearStore();
            setData(getSummary());
          }}
        >
          Clear
        </button>
        <button onClick={exportJSON}>Export JSON</button>
      </div>

      <div style={{ maxHeight: 260, overflow: "auto" }}>
        {data.entries.length === 0 && (
          <div style={{ color: "#666" }}>No events yet — interact with UI.</div>
        )}
        {data.entries.map((e) => (
          <div
            key={e.id}
            style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{e.id}</strong>
              <span style={{ color: "#666" }}>
                {Math.round(e.avgDuration)}ms avg / {Math.round(e.lastDuration)}
                ms last
              </span>
            </div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              Renders: {e.renders} • Recent events: {e.events.length}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
