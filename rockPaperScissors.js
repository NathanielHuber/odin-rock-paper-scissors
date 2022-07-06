const playOptions = ["rock","paper","scissors"]
const options = document.querySelector("#options")
const startButton = document.querySelector("#button-start")
const winnerMessage = document.querySelector("#winner")

let score = {
    "Player":0,
    "Computer":0,
    "It's a tie!":0
}

const computerPlay = function() {
    const choice = Math.floor(Math.random()*3)
    return playOptions[choice]
}


function playRound() {
    let playerSelection = this.innerText.toLowerCase()
    console.log(playerSelection)
    computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        score["It's a tie!"]++;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        score["Player"]++;
    } else {
        score["Computer"]++;
    }
    updateScore()
    checkScore()
}

function checkScore() {
    if (score.Player == 5) {
        gameOver();
    } else if (score.Computer == 5) {
        gameOver();
    }
}

function gameOver () {
    const buttons = document.querySelectorAll(".option")
    buttons.forEach(button => {
        button.disabled = true;
    })
    const resetButton = document.createElement("button")
    resetButton.id = "resetButton"
    resetButton.innerText = "Reset?"
    resetButton.addEventListener("click", resetGame)
    document.body.appendChild(resetButton)
}

function resetGame() {
    console.log("reset")
    removeButtons()
    startButton.style.display = "block"
    score = {
        "Player":0,
        "Computer":0,
        "It's a tie!":0
    }
    const scoreCard = document.querySelector("#scoreCard").remove()
}

function start() {
    startButton.style.display = "none"
    addButtons()
    const scoreCard = document.createElement("p")
    scoreCard.id = "scoreCard"
    scoreCard.innerText = `Player: ${score.Player}   Computer: ${score.Computer}`;
    document.body.prepend(scoreCard)
}

function addButtons() {
    const rock = document.createElement("button")
    rock.innerText = "Rock"
    rock.classList.add("option")
    rock.addEventListener("click",playRound)
    document.body.appendChild(rock)

    const paper = document.createElement("button")
    paper.innerText = "Paper"
    paper.classList.add("option")
    paper.addEventListener("click",playRound)
    document.body.appendChild(paper)

    const scissors = document.createElement("button")
    scissors.innerText = "Scissors"
    scissors.classList.add("option")
    scissors.addEventListener("click",playRound)
    document.body.appendChild(scissors)
}

function removeButtons() {
    document.querySelectorAll(".option").forEach(option => option.remove())
    document.querySelector("#resetButton").remove()
}

function updateScore() {
    const scoreCard = document.querySelector("#scoreCard")
    scoreCard.innerText = `Player: ${score.Player}  Computer: ${score.Computer}  Tie: ${score["It's a tie!"]}`
        
}
