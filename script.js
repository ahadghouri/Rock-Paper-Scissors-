let player = 0;
let computer = 0;
let nr = 0

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock")
    {
        if(computerSelection == "rock")
        {
            alert("Its a draw!");
            return "nr";
        }
        else if(computerSelection == "paper")
        {
            alert("You Lose! Paper beats Rock");
            return "computer;"
        }
        else
        {
            alert("You Win! Rock beats Scissors");
            return "player";
        }
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
        {
            alert("You Win! Paper beats Rock");
            return "player";
        }
        else if(computerSelection == "paper")
        {
            alert("Its a draw!");
            return "nr";
        }
        else
        {
            alert("You Lose! Scissors beats Paper");
            return "computer";
        }
    }
    else if(playerSelection == "scissors")
    {
        if(computerSelection == "rock")
        {
            alert("You Lose! Rock beats Scissors");
            return "computer";
        }
        else if(computerSelection == "paper")
        {
            alert("You Win! Scissors beat Paper");
            return "player";
        }
        else
        {
            alert("Its a draw!");
            return "nr";
        }
    }
    else
    {
        return "Enter your choice correctly and try again."
    }
}

function getComputerChoice() {
    const select = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * (2 + 1) );
    return select[rand];
}

function game(n) {

    for (let i = 0; i < n; i++) {
        const playerSelection = prompt("Choose one of rock, paper & scissors:").toLowerCase();
        const computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        if(winner == "player")
        {
            player++;
        }
        else if(winner == "computer")
        {
            computer++;
        }
        else if(winner == "nr")
        {
            nr++;
        }
        else
        {
            console.log(winner);
            break;
        }

     }
}

let n = parseInt(prompt("How many games do you want to play?"));
game(n);
alert("Player won: " + player + " Computer won: " + computer + " Draw: " + nr);