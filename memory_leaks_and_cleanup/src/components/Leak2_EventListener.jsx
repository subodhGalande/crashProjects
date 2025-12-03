import { useEffect } from "react";

export default function Leak2_EventListener() {
  function handleResize() {
    console.log("Resized!");
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Resize listener active...</p>;
}
