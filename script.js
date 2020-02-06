let options = ["Rock", "Paper", "Scissors"];
let loseCount = 0;
let winCount = 0;
let tieCount = 0;
let gameCount = 0;

function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

function capitalize (str) {
    let lowerCase = str.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}


function playRound (playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Paper") ||
       (playerSelection === "Paper" && computerSelection === "Scissors") ||
       (playerSelection === "Scissors" && computerSelection === "Rock")) {
            loseCount++;
            gameCount++;
            return "You Lose! "+ computerSelection + " beats " + playerSelection;
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
              (playerSelection == "Scissors" && computerSelection == "Paper") ||
              (playerSelection == "Paper" && computerSelection == "Rock")) {
                  winCount++;
                  gameCount++;
                  return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        tieCount++;
        gameCount++;
        return "It's a tie! Both picked " + computerSelection;
    };
}

function keepScore () {
        if (winCount > loseCount) {
            return "You're winning! Current score is " + winCount + ":" + loseCount + ":" + tieCount + ". Total rounds: " + gameCount;
        } else if (loseCount > winCount) {
            return "You're losing... Current score is " + winCount + ":" + loseCount + ":" + tieCount + ". Total rounds: " + gameCount;
        } else {
            return "It's tied. Current score is " + winCount + ":" + loseCount + ":" + tieCount + ". Total rounds: " + gameCount;
        }
    }

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const reset = document.querySelector(".reset");
const game = document.querySelector("#game");

rock.addEventListener("click", (e) => {
    let playerSelection = rock.value;
    let round = playRound (playerSelection, computerPlay());
    results.textContent = round.toString();
    score.textContent = keepScore().toString();
});

paper.addEventListener("click", (e) => {
    let playerSelection = paper.value;
    let round = playRound (playerSelection, computerPlay());
    results.textContent = round.toString();
    score.textContent = keepScore().toString();
});

scissors.addEventListener("click", (e) => {
    let playerSelection = scissors.value;
    let round = playRound (playerSelection, computerPlay());
    results.textContent = round.toString();
    score.textContent = keepScore().toString();
});

reset.addEventListener("click", (e) => {
    if (confirm("Are you sure you want to reset the game?")) {
        window.location.reload();
    };
})