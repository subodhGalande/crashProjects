export default function SkeletonList() {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Loading results...</h3>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 20,
            width: "60%",
            marginBottom: 8,
            background: "#ececec",
            animation: "pulse 1.2s infinite",
          }}
        />
      ))}

      <style>{`
        @keyframes pulse {
          0% { opacity: .6; }
          50% { opacity: 1; }
          100% { opacity: .6; }
        }
      `}</style>
    </div>
  );
}
