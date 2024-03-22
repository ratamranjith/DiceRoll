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
player0 = document.querySelector(".player1");
player1 = document.querySelector(".player2");
winner = document.querySelector(".winner");
winner.classList.add("hidden");
diceImage.classList.add("hidden");
let currentScore = [0, 0]; // Store scores of two players
let currentPlayer = 0;
let isSadImageAdded = false;

clickRoll.addEventListener("click", function () {
  if (processNames() === true) {
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
      if (currentScore[currentPlayer] >= 20) {
        winner.classList.remove("hidden");
        let playerName = eval(`player${currentPlayer}`);
        winner.style.color = "#FFFFFF";
        winner.textContent = `${playerName.textContent} Wins`;
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

function processNames() {
  let retVal = false;
  this.Player1 = document.getElementById("Player1").value;
  this.Player2 = document.getElementById("Player2").value;
  if (this.Player1 === "" || this.Player2 === "") {
    alert("Please enter the players name");
    retVal = false;
  } else {
    player0.textContent = this.Player1;
    player1.textContent = this.Player2;
    retVal = true;
  }
  return retVal;
}
