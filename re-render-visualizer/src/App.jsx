import { useState, useCallback } from "react";
import ChildDisplay from "./childDisplay";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const toggleTheme = () => setDark((d) => !d);

  console.log("App rendered");

  return (
    <div
      style={{
        backgroundColor: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h2>🧩 React Re-render Visualizer</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={toggleTheme} style={{ marginLeft: "10px" }}>
        Toggle Theme
      </button>

      <ChildDisplay value={count} />
    </div>
  );
}

export default App;
