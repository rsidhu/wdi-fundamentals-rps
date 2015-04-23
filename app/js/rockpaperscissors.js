////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move == "rock"){
        console.log("User selected rock.");
    }else if (move == "paper"){
        console.log("User selected paper.");
    }else if (move == "scissors"){
        console.log("User selected scissors.");
    }else{
        getInput();
    }
    return move;
  }

function getComputerMove(move) {
    if (move == "rock"){
        console.log("User selected rock.");
    }else if (move == "paper"){
        console.log("User selected paper.");
    }else if (move == "scissors"){
        console.log("User selected scissors.");
    }else{
        randomPlay();
    }
    return move;
  }
var winner;
function getWinner(playerMove,computerMove) {
    if (playerMove == computerMove){
        winner = "tie";
        console.log("It's a draw!");
    }else if(playerMove == "rock" && computerMove == "paper"){
        winner = "computer";
        console.log("Computer wins!");
    }else if(playerMove == "rock" && computerMove == "scissors"){
        winner = "player";
        console.log("Player wins!");
    }else if(playerMove == "paper" && computerMove == "rock"){
        winner = "player";
        console.log("Player wins!");
    }else if(playerMove == "paper" && computerMove == "scissors"){
        winner = "computer";
        console.log("Computer wins!");
    }else if(playerMove == "scissors" && computerMove == "rock"){
        winner = "computer";
        console.log("Computer wins!");
    }else if(playerMove == "scissors" && computerMove == "paper"){
        winner = "player";
        console.log("Player wins!");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5){
        var playerMove = getInput();
        var computerMove = randomPlay();
        getWinner (playerMove,computerMove);
        if(winner == "player"){
            playerWins++;
        }else if(winner == "computer"){
            computerWins++;
        }else{
            console.log("Fail.");
        }
    }
    return [playerWins, computerWins];
}
