import React, { useState } from "react";

export default function SettingsPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h3>Settings</h3>
      <div className="small-muted">Simulated heavy form</div>
      <div style={{ marginTop: 12 }}>
        <div style={{ marginBottom: 8 }}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: 8, width: "60%" }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 8, width: "60%" }}
          />
        </div>
        <div>
          <button onClick={() => alert(`Saved ${name} / ${email}`)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
