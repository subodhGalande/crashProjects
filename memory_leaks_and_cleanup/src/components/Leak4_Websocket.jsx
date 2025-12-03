import { useEffect, useState } from "react";

export default function Leak4_Websocket() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://echo.websocket.org");

    ws.onmessage = (e) => setMessages((m) => [...m, e.data]);

    return () => {
      if (
        ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CONNECTING
      ) {
        ws.close();
      }
    };
  }, []);

  return <p>Messages: {messages.length}</p>;
}
