// Simulate slow server fetch
export function fetchSlowNames(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(query);
    }, 1500); // 1.5s delay
  });
}
