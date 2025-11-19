import React from "react";
import names from "../names";
import { slowFilter } from "./slowFilter";

export default function ListDisplay({ resource }) {
  const search = resource.read(); // Suspense waits here

  // heavy CPU filtering
  const filtered = slowFilter(names, search);

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Filtered Results ({filtered.length})</h3>
      {filtered.slice(0, 200).map((n, i) => (
        <div key={i}>{n}</div>
      ))}
    </div>
  );
}
