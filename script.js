var timer = 60;
var score = 0;
var hitRn = 0;

function inscreaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRn;
}
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 75; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#panel-bottom").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#panel-bottom"
      ).innerHTML = `<h1 id ="">Game Over</h1>`;
    }
  }, 1000);
}
document
  .querySelector("#panel-bottom")
  .addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum == hitRn) {
      inscreaseScore();
      makeBubble();
      getNewHit();
    }
  });
runTimer();
makeBubble();
getNewHit();
