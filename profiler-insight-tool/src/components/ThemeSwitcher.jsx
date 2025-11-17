import React from "react";

export default function ThemeSwitcher({ theme, toggle }) {
  return (
    <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 6 }}>
      <h4>Theme</h4>
      <div>
        Current: <strong>{theme}</strong>
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={toggle}>Toggle Theme</button>
      </div>
    </div>
  );
}
