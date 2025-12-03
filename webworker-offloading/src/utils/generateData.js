export function generateData() {
  return Array.from({ length: 50000 }, () =>
    Math.floor(Math.random() * 100000),
  );
}
