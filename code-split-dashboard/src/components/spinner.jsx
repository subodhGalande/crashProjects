import React from "react";

export default function Spinner({ label = "Loading..." }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 18,
          border: "3px solid #ccc",
          borderTopColor: "#111",
          animation: "spin 0.9s linear infinite",
        }}
      />
      <div>{label}</div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
