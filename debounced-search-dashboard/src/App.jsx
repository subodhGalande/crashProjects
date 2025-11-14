import { useEffect, useMemo, useState } from "react";

export default function App() {
  // raw input
  const [search, setSearch] = useState("");
  // debounced value
  const [debounced, setDebounced] = useState("");
  // data + status
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  // fetch once on mount
  useEffect(() => {
    let isMounted = true;
    setStatus("loading");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (!isMounted) return;
        setUsers(data);
        setStatus("success");
      })
      .catch((e) => {
        if (!isMounted) return;
        setError(e.message || "Failed to load");
        setStatus("error");
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // debounce the search input
  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim()), 400);
    return () => clearTimeout(t);
  }, [search]);

  // filter derived list
  const filtered = useMemo(() => {
    const q = debounced.toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.username.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q),
    );
  }, [users, debounced]);

  return (
    <div style={{ padding: 16, maxWidth: 640 }}>
      <h2>🔍 Debounced Search — Client-side Filter</h2>

      <input
        type="text"
        placeholder="Search name, username, or email…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search users"
        style={{ padding: 8, width: 320, marginRight: 8 }}
      />
      <span style={{ fontSize: 12, color: "#555" }}>
        Debounce: 400ms • Results: {status === "success" ? filtered.length : 0}
      </span>

      <div style={{ marginTop: 12 }}>
        {status === "loading" && <div>Loading users…</div>}
        {status === "error" && (
          <div role="alert" style={{ color: "crimson" }}>
            {error}
          </div>
        )}
        {status === "success" && filtered.length === 0 && (
          <div>No matches for “{debounced}”.</div>
        )}
        {status === "success" &&
          filtered.map((u) => (
            <div
              key={u.id}
              style={{
                borderBottom: "1px solid #eee",
                padding: "8px 0",
                lineHeight: 1.4,
              }}
            >
              <div>
                <b>{u.name}</b> @{u.username}
              </div>
              <div style={{ color: "#555" }}>{u.email}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
