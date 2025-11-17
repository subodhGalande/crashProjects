import React from "react";

export default function Nav({ active, onChange }) {
  return (
    <div className="nav">
      <h4>Panels</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginTop: 8,
        }}
      >
        <button
          className={active === "analytics" ? "active" : ""}
          onClick={() => onChange("analytics")}
        >
          Analytics
        </button>
        <button
          className={active === "users" ? "active" : ""}
          onClick={() => onChange("users")}
        >
          Users
        </button>
        <button
          className={active === "settings" ? "active" : ""}
          onClick={() => onChange("settings")}
        >
          Settings
        </button>
      </div>
      <div style={{ marginTop: 12 }} className="small-muted">
        Code-split panels load on demand.
      </div>
    </div>
  );
}
