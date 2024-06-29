const p1Button = document.querySelector("#playerOneButton");
const p2Button = document.querySelector("#playerTwoButton");
const resetButton = document.querySelector("#resetButton");

const p1Display = document.querySelector("#playerOneDisplay");
const p2Display = document.querySelector("#playerTwoDisplay");

const selectButton = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;

    if (p1Score === winningScore) {
      isGameOver = true;

      p1Display.classList.add("green");
      p2Display.classList.add("red");
    }

    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;

    if (p2Score === winningScore) {
      isGameOver = true;

      p2Display.classList.add("green");
      p1Display.classList.add("red");
    }

    p2Display.textContent = p2Score;
  }
});

function reset() {
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;

  isGameOver = false;

  p1Display.classList.remove("green", "red");
  p2Display.classList.remove("green", "red");
}

selectButton.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);
