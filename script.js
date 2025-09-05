window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let tens = 0;
  let appendMinutes = document.querySelector("#minutes");
  let appendSeconds = document.querySelector("#seconds");
  let appendTens = document.querySelector("#tens");

  let startBtn = document.querySelector("#start");
  let stopBtn = document.querySelector("#stop");
  let resetBtn = document.querySelector("#reset");
  let lapBtn = document.querySelector("#lap");
  let lapsContainer = document.querySelector("#laps");

  let Interval;

  const startTimer = () => {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHtml = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  };

  startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stopBtn.onclick = () => {
    clearInterval(Interval);
  };

  resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
  };

  lapBtn.onclick = () => {
    let lapTime = `${appendMinutes.innerHTML}:${appendSeconds.innerHTML}:${appendTens.innerHTML}`;
    let li = document.createElement("li");
    li.textContent = "Lap - " + lapTime;
    lapsContainer.appendChild(li);
  };
};
