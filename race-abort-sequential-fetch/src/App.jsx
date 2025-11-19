import { useState, useCallback } from "react";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import { useCancelableFetch } from "./hooks/useCancelableFetch";
import { searchUsers } from "./api/searchUsers";

export default function App() {
  const [search, setSearch] = useState("");

  const fetchFn = useCallback((query, signal) => {
    return searchUsers(query, signal);
  }, []);

  const { data, status, error } = useCancelableFetch(fetchFn, search);

  return (
    <div style={{ padding: 20 }}>
      <h2>⚡ Project 7 — Race Conditions + Abort Logic</h2>

      <SearchBox value={search} onChange={setSearch} />

      <Results status={status} data={data} error={error} />

      <p style={{ marginTop: 20, color: "gray" }}>
        Type fast + enable Network Slow 3G → see cancellation happening.
      </p>
    </div>
  );
}
