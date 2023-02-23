import Lottery from "./modules/lottery.js";
import { politicians } from "./data/data.js";

const buttonStartLotteryEl = document.querySelector(".button-start-lottery");
const lottteryResultsEl = document.querySelector(".lottery-results");
const winningCombinationEl = document.querySelector(".winning-combination");
const winningMessageEl = document.querySelector(".winners-message");
const winnersEl = document.querySelector(".winners");

const lottery = new Lottery(politicians);

buttonStartLotteryEl.addEventListener("click", function () {
  buttonStartLotteryEl.disabled = true;
  buttonStartLotteryEl.innerText = "Lottery drawing in progress...";
  lottteryResultsEl.style.display = "none";

  lottery
    .startDrawing()
    .then((result) => {
      winnersEl.display = "block";
      winningCombinationEl.innerText = `Winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerText = "Winners:";

      let winnersList = "";
      result.winners.forEach(
        (winner) => (winnersList += `<li>${winner.getPlayerDetails()}</li>`)
      );

      winnersEl.innerHTML = winnersList;
    })
    .catch((result) => {
      winnersEl.display = "none";
      winningCombinationEl.innerHTML = `Winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerHTML = "There are no winners!";
    })
    .finally(() => {
      buttonStartLotteryEl.disabled = false;
      buttonStartLotteryEl.innerText = "Start lottery drawing";
      lottteryResultsEl.style.display = "block";
    });
});
