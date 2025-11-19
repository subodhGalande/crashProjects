export default function Results({ status, data, error }) {
  if (status === "idle") return <p>Start typing to search.</p>;

  if (status === "loading")
    return <p style={{ color: "gray" }}>Searching...</p>;

  if (status === "error") return <p style={{ color: "red" }}>Error: {error}</p>;

  if (status === "success" && data.length === 0) return <p>No results.</p>;

  return (
    <ul style={{ marginTop: 10 }}>
      {data.map((u, i) => (
        <li key={i}>{u}</li>
      ))}
    </ul>
  );
}
