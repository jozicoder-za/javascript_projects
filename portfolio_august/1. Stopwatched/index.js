let displayTime = document.getElementById("displayTime");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

const startEl = document.getElementById("startEl");

startEl.addEventListener("click", () => {
  console.log("Start button clicked");
  watchStart();
});
