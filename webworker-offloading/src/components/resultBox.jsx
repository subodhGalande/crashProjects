export default function ResultBox({ result }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Sorted Output (first 20)</h3>
      <pre>{JSON.stringify(result.slice(0, 20), null, 2)}</pre>
    </div>
  );
}
