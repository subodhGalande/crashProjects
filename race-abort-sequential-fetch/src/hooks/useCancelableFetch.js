import { useEffect, useRef, useState } from "react";

export function useCancelableFetch(fetchFn, searchTerm) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  // Track abort controller
  const controllerRef = useRef(null);

  useEffect(() => {
    if (!searchTerm) {
      setData([]);
      setStatus("idle");
      setError(null);
      return;
    }

    // Cancel previous request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    setStatus("loading");
    setError(null);

    fetchFn(searchTerm, controller.signal)
      .then((res) => {
        setData(res);
        setStatus("success");
      })
      .catch((err) => {
        if (err.message === "Request Aborted") return;
        setError(err.message || "Error");
        setStatus("error");
      });

    // Cleanup on unmount
    return () => controller.abort();
  }, [fetchFn, searchTerm]);

  return { data, status, error };
}
