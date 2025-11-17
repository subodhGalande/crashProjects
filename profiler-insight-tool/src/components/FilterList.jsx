import React from "react";

export default function FilterList({ items, filter }) {
  // simulate expensive render for demonstration
  const heavy = React.useMemo(() => {
    // artificial CPU work
    let sum = 0;
    for (let i = 0; i < 100000; i++) sum += i % 7;
    return sum;
  }, []);

  const filtered = React.useMemo(() => {
    const q = (filter || "").toLowerCase();
    if (!q) return items;
    return items.filter((s) => s.toLowerCase().includes(q));
  }, [items, filter]);

  return (
    <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 6 }}>
      <h4>Filtered List</h4>
      <div style={{ color: "#666", fontSize: 12 }}>Heavy CPU work: {heavy}</div>
      <div style={{ marginTop: 8 }}>
        {filtered.slice(0, 100).map((it, i) => (
          <div key={i} style={{ padding: 4 }}>
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
