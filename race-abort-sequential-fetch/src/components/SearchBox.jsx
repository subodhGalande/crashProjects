export default function SearchBox({ value, onChange }) {
  return (
    <input
      style={{ padding: 10, width: 300 }}
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
