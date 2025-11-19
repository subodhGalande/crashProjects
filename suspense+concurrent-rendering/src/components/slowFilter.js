export function slowFilter(list, query) {
  // Artificial CPU block: 15ms
  const start = performance.now();
  while (performance.now() - start < 15) {
    console.log();
  }

  return list.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );
}
