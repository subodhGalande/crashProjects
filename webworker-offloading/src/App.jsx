import { useEffect, useRef, useState } from "react";
import { generateData } from "./utils/generateData";
import ComputeButton from "./components/computeButton";
import ResultBox from "./components/resultBox";

export default function App() {
  const workerRef = useRef(null);
  const [isPending, setIsPending] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    // Create worker instance
    workerRef.current = new Worker(
      new URL("./workers/heavyWorker.js", import.meta.url),
      { type: "module" },
    );

    // Listen for worker messages
    workerRef.current.onmessage = (event) => {
      if (event.data.type === "DONE") {
        setResult(event.data.payload);
        setIsPending(false);
      }
    };

    return () => workerRef.current.terminate();
  }, []);

  function handleRun() {
    const data = generateData();

    setIsPending(true);

    workerRef.current.postMessage({
      type: "START",
      payload: data,
    });
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>⚙️ Project 8 — Web Worker Offloading</h2>

      <ComputeButton onRun={handleRun} isPending={isPending} />

      {result.length > 0 && <ResultBox result={result} />}
    </div>
  );
}
