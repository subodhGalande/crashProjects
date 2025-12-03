export default function ComputeButton({ onRun, isPending }) {
  return (
    <button
      onClick={onRun}
      style={{
        padding: 10,
        fontSize: 16,
        cursor: "pointer",
        background: isPending ? "#ccc" : "#0070f3",
        color: "white",
        border: "none",
        borderRadius: 6,
      }}
      disabled={isPending}
    >
      {isPending ? "Computing..." : "Run Heavy Computation"}
    </button>
  );
}
