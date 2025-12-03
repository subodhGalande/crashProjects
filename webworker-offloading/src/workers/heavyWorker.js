// heavyWorker.js

// Example heavy function (intentionally expensive)
function heavySort(list) {
  // Simulate expensive CPU work
  for (let i = 0; i < 30000000; i++) {
    console.log();
  } // busy loop
  return list.sort((a, b) => a - b);
}

// Receive message from main thread
onmessage = function (event) {
  const data = event.data;

  if (data.type === "START") {
    const sorted = heavySort(data.payload);
    postMessage({ type: "DONE", payload: sorted });
  }
};
