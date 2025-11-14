import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(" ");

  useEffect(() => {
    console.log("typing: ", text);

    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      console.log("Clearing the timer before the next timer run");
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: 10, width: 300, fontSize: 16 }}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <h3>Immediate Value (updates every keystroke):</h3>
        <p>{text}</p>

        <h3>Debounced Value (updates after 500ms pause):</h3>
        <p style={{ fontSize: 18, fontWeight: "bold", color: "#0070f3" }}>
          {debouncedText}
        </p>
      </div>
    </>
  );
}

export default App;
