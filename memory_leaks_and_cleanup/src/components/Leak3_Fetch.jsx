import { useEffect, useState } from "react";

export default function Leak3_Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then((res) => setData(res))
      .catch((err) => {
        if (err.name === "AbortError") return;
      });

    return () => controller.abort();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
