let counter = 0;

// function updateCounter() {
//   counter++;
//   console.log("Counter:", counter);
// }
function updateDate(){
    const newdate = new Date();
    let currentHour =  newdate.getHours();
    const currentMin = newdate.getMinutes();
    const currentSec = newdate.getSeconds();
    let meridian = "AM"
    if(currentHour>=12)
    {
        currentHour = currentHour-"12";
        meridian = "PM";
    }
    //console.log(currentHour,":",currentMin,":",currentSec," ",meridian);
    console.log(`${currentHour}:${currentMin}:${currentSec} ${meridian}`);
}

// Update the counter every second (1000 milliseconds)
const intervalId = setInterval(updateDate, 1000);

// To stop the counter after a certain period (e.g., 10 seconds), you can use setTimeout
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval
  console.log("Counter stopped after 10 seconds");
}, 10000);