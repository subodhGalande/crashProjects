import React from "react";

/** Simulate heavy component by waiting before showing content */
function HeavyChart() {
  // small CPU work to simulate "heavy" render (not blocking long)
  const points = Array.from({ length: 2000 }, (_, i) => Math.sin(i / 10));
  return (
    <div>
      <h3>Analytics</h3>
      <div className="small-muted">Simulated heavy chart (client-side)</div>
      <div
        style={{
          marginTop: 12,
          height: 180,
          background: "#f3f4f6",
          overflow: "auto",
          padding: 8,
        }}
      >
        <div style={{ height: 300, width: "100%" }}>
          {points.slice(0, 60).map((p, i) => (
            <div
              key={i}
              style={{
                display: "inline-block",
                width: 6,
                height: Math.abs(p * 40) + 4,
                marginRight: 1,
                background: "#2563eb",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsPanel() {
  return (
    <div>
      <HeavyChart />
      <div style={{ marginTop: 12 }}>
        <p className="small-muted">
          This panel is code-split and loaded only when opened.
        </p>
      </div>
    </div>
  );
}
