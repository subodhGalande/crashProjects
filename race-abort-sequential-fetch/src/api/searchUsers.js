export function searchUsers(query, signal) {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    const time = 800 + Math.random() * 900; // 0.8s–1.7s

    const timeout = setTimeout(() => {
      const users = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eva",
        "Frank",
        "Grace",
        "Hannah",
        "Ian",
        "Julia",
        "Kevin",
        "Lily",
        "Mason",
        "Nora",
        "Oliver",
        "Sophia",
        "Zara",
      ];

      const filtered = users.filter((u) =>
        u.toLowerCase().includes(query.toLowerCase()),
      );

      resolve(filtered);
    }, time);

    // Handle abort
    signal.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(new Error("Request Aborted"));
    });
  });
}
