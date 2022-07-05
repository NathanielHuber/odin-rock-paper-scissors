const playOptions = ["rock","paper","scissors"]

const computerPlay = function() {
    const choice = Math.floor(Math.random()*3)
    return playOptions[choice]
}

const playRound = function() {
    selection = prompt("Rock, Paper, or Scissors?")
    playerSelection = selection.toLowerCase()
    computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        return [playerSelection, computerSelection, "It's a tie!"];
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return [playerSelection, computerSelection, "Player"];
    } else {
        return [playerSelection, computerSelection, "Computer"];
    }
    }


const game = function() {

    const score = {
        "Player":0,
        "Computer":0,
        "It's a tie!":0
    }

    for (let index = 0; index < 5; index++) {
        round = playRound();
        console.log(`Round ${index+1}:
           Player chose: ${round[0]}
           Computer chose: ${round[1]}
           The winner is: ${round[2]}!`)
        score[round[2]] += 1
    }
    console.table(score)
    if (score["Player"] === score["Computer"]) {
        console.log("No Winner!");
    } else if (score["Player"] > score["Computer"]) {
        console.log("Player wins!");
    } else {console.log("Computer wins!")}
}
