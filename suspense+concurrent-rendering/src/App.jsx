import { useState, useTransition, Suspense } from "react";

import ListDisplay from "./components/ListDisplay";
import SkeletonList from "./components/SkeletonList";
import { fetchSlowNames } from "./api/fetchSlowNames";
import { createResource } from "./createResource";

export default function App() {
  const [search, setSearch] = useState("");

  const [resource, setResource] = useState(createResource(fetchSlowNames("")));

  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;

    setSearch(value);

    // Start transition for async fetch + heavy render
    startTransition(() => {
      setResource(createResource(fetchSlowNames(value)));
    });
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>🚀 Extended Concurrent Rendering Playground</h2>

      <input
        style={{ padding: 10, width: 320 }}
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />

      {isPending && (
        <div style={{ color: "gray", marginTop: 10 }}>
          Loading new results...
        </div>
      )}

      <Suspense fallback={<SkeletonList />}>
        <ListDisplay resource={resource} />
      </Suspense>
    </div>
  );
}
