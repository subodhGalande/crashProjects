import React from "react";

function FakeTable() {
  const rows = new Array(200).fill(0).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));
  return (
    <div>
      <h3>Users</h3>
      <div className="small-muted">Simulated heavy table</div>
      <div
        style={{
          marginTop: 12,
          maxHeight: 260,
          overflow: "auto",
          border: "1px solid #f0f0f0",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ position: "sticky", top: 0, background: "#fff" }}>
            <tr>
              <th style={{ textAlign: "left", padding: 8 }}>ID</th>
              <th style={{ textAlign: "left", padding: 8 }}>Name</th>
              <th style={{ textAlign: "left", padding: 8 }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td style={{ padding: 8, borderTop: "1px solid #eee" }}>
                  {r.id}
                </td>
                <td style={{ padding: 8, borderTop: "1px solid #eee" }}>
                  {r.name}
                </td>
                <td style={{ padding: 8, borderTop: "1px solid #eee" }}>
                  {r.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function UserPanel() {
  return <FakeTable />;
}
