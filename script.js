let choices = ["rock", "paper", "scissors"];
let userChoice = document.getElementById("userChoice");
let computerChoice = document.getElementById("computerChoice");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let result = document.getElementById("result");

let userResult = 0
let computerResult = 0


userScore.textContent = `Player Score: ${userResult}`
computerScore.textContent = `Computer Score: ${computerResult}`

function computerChoices() {
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(userSelection) {
    userChoice.textContent = `Player :`
    computerChoice.textContent = `Computer :`

    let computerSelection = computerChoices();
    userChoice.textContent += userSelection;
    computerChoice.textContent += computerSelection;

    result.classList.remove("tie", "winner", "loser");

    if (userSelection === computerSelection) {
        result.textContent = "It's a tie!";
        result.classList.add("tie")
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
    ) {
        result.textContent = "You win!";
        result.classList.add("winner")
        userResult++
        userScore.textContent = `Player Score: ${userResult}`
    } else {
        result.textContent = "You lose!";
        result.classList.add("loser")
        computerResult++
        computerScore.textContent =`Computer Score: ${computerResult}` 
    }
}

rock.addEventListener("click", function() {
    playGame("rock");
});

paper.addEventListener("click", function() {
    playGame("paper");
});

scissors.addEventListener("click", function() {
    playGame("scissors");
});