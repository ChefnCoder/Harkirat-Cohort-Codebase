let counter = 0;

function updateCounter() {
  counter++;
  console.log("Counter:", counter);
}

// Update the counter every second (1000 milliseconds)
const intervalId = setInterval(updateCounter, 1000);

// To stop the counter after a certain period (e.g., 10 seconds), you can use setTimeout
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval
  console.log("Counter stopped after 10 seconds");
}, 11000);