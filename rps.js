

var userScore = 0;
var compScore = 0;
const computerChoices = ["rock", "paper", "scissors"];

const resultDiv = document.querySelector(".result > p");
const userScore_div = document.getElementById("user-score");
const compScore_div = document.getElementById("computer-score");
const comp_Choicespan = document.getElementById("comp-choice");
const user_Choicespan = document.getElementById("user-choice");
const score_board = document.querySelector(".score-Board");
const reset = document.getElementById("reset");

function sendRock() { getUserChoice("rock") }
function sendPaper() { getUserChoice("paper") }
function sendScissor() { getUserChoice("scissors") }

//User choice
function getUserChoice(userInput) {

    const result = getWinner(userInput, getComputerChoice());
    resultDiv.innerHTML = result;

    if (result === "Computer Won") {
        compScore++;
        compScore_div.innerHTML = compScore;
        document.getElementById(userInput).classList.add("loose");
        score_board.classList.add("loose");
        setTimeout(
            function () {
                document.getElementById(userInput).classList.remove("loose");
                score_board.classList.remove("loose");
            }, 400
        );
    }
    if (result === "User Won") {
        userScore++;
        userScore_div.innerHTML = userScore;
        document.getElementById(userInput).classList.add("won");
        score_board.classList.add("won");

        setTimeout(
            function () {
                document.getElementById(userInput).classList.remove("won");
                score_board.classList.remove("won");
            }, 400
        );
    }

}

// Computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}


// Win Logic
function getWinner(userChoice, computerChoice) {
    user_Choicespan.innerHTML = `User Choice : ${userChoice}`;
    comp_Choicespan.innerHTML = `Computer Choice : ${computerChoice}`;
    if (userChoice === computerChoice)
        return 'Match tied';

    if (userChoice === 'rock' && computerChoice === 'paper')
        return 'Computer Won'

    if (userChoice === 'paper' && computerChoice === 'scissors')
        return 'Computer Won'

    if (userChoice === 'scissors' && computerChoice === 'rock')
        return 'Computer Won'

    if (userChoice === 'rock' && computerChoice === 'scissors')
        return 'User Won'

    if (userChoice === 'paper' && computerChoice === 'rock')
        return 'User Won'

    if (userChoice === 'scissors' && computerChoice === 'paper')
        return 'User Won'
}

// reset button
reset.addEventListener("click", () => {
    comp_Choicespan.innerHTML = "";
    user_Choicespan.innerHTML = "";
    userScore_div.innerHTML = 0;
    compScore_div.innerHTML = 0;
})