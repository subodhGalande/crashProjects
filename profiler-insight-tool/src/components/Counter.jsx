import React from "react";

export default function Counter({ onIncrement }) {
  const [n, setN] = React.useState(0);
  return (
    <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 6 }}>
      <h4>Counter</h4>
      <div style={{ fontSize: 20 }}>{n}</div>
      <div style={{ marginTop: 8 }}>
        <button
          onClick={() => {
            setN(n + 1);
            if (onIncrement) onIncrement();
          }}
        >
          Local +1
        </button>
      </div>
    </div>
  );
}
