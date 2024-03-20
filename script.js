let score0, score1, tscore0, tscore1, high0, high1;
score0 = document.querySelector(".p1score");
score1 = document.querySelector(".p2score");
tscore0 = document.querySelector(".temp1score");
tscore1 = document.querySelector(".temp2score");
high0 = document.querySelector(".high1score");
high1 = document.querySelector(".high2score");
diceImage = document.querySelector(".diceImg");
clickRoll = document.querySelector(".clickRoll");
updateScore = document.querySelector("#updateScore");

diceImage.classList.add("hidden");
let currentScore = [0, 0]; // Store scores of two players
let currentPlayer = 0;
let isSadImageAdded = false;

clickRoll.addEventListener("click", function () {
  let number = Math.trunc(Math.random() * 6) + 1;
  diceImage.classList.remove("hidden");
  diceImage.src = `images/dice${number}.png`;

  if (number !== 1) {
    currentScore[currentPlayer] += number;
    tscore0.textContent = currentScore[0];
    tscore1.textContent = currentScore[1];
    if (isSadImageAdded) {
      tscore0.removeChild(tscore0.lastChild);
      tscore1.removeChild(tscore1.lastChild);
      isSadImageAdded = false;
    }
  } else {
    currentScore[currentPlayer] = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    tscore0.textContent = currentScore[0];
    tscore1.textContent = currentScore[1];
    if (!isSadImageAdded) {
      let img = new Image();
      img.src = "/images/sad.gif";
      img.width = "64";
      img.height = "64";
      if (currentPlayer === 0) {
        tscore0.appendChild(img);
      } else {
        tscore1.appendChild(img);
      }
      isSadImageAdded = true;
    }
  }
});

updateScore.addEventListener("click", function () {
  if (
    eval(`score${currentPlayer}`).textContent < currentScore[currentPlayer] &&
    !(eval(`score${currentPlayer}`).textContent > currentScore[currentPlayer])
  ) {
    eval(`score${currentPlayer}`).textContent = currentScore[currentPlayer];
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  }
});
