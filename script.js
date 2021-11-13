//user element
const nameIconClick = document.querySelector(".iconName-click");
const RockIcon = document.getElementById("Rock");
const PaperIcon = document.getElementById("Paper");
const ScissorsIcon = document.getElementById("Scissors");
const lizardIcon = document.getElementById("lizard");
const SpockIcon = document.getElementById("Spock");

//Computer name Icon
const nameIconComputer = document.querySelector(".nameIconComputer");

//refresh Icon
const refreshIcon = document.getElementById("refreshIcon");

//result game
const resultGame = document.getElementById("result-game");

//Score Board
const playerScoreBoard = document.querySelector(".score-player");
const computerScoreBoard = document.querySelector(".computer-score");

let computerScore = 0;
let playerScore = 0;

//click user on RockIcon
function clickRockIcon() {
  console.log("user click on Rock Icon");
  nameIconClick.textContent = "rock";
  randomChoise();
  game(nameIconClick.textContent, randomChoise());
}
//click user on PaperIcon
function clickPaperIcon() {
  console.log("user click on Paper Icon");
  nameIconClick.textContent = "paper";
  randomChoise();
  game(nameIconClick.textContent, randomChoise());
}
//click user on ScissorsIcon
function clickScissorsIcon() {
  console.log("user click on Scissor Icon");
  nameIconClick.textContent = "scissors";
  randomChoise();
  game(nameIconClick.textContent, randomChoise());
}
//click user on lizardIcon
function clicklizardIcon() {
  console.log("user click on lizard Icon");
  nameIconClick.textContent = "lizard";
  randomChoise();
  game(nameIconClick.textContent, randomChoise());
}
//click user on SpockIcon
function clickSpockIcon() {
  console.log("user click on Spock Icon");
  nameIconClick.textContent = "spock";
  randomChoise();
  game(nameIconClick.textContent, randomChoise());
}

//Computer choise
function randomChoise() {
  var computerChoise = Math.random();
  if (computerChoise < 0.2) {
    nameIconComputer.textContent = "rock";
  } else if (computerChoise < 0.4) {
    nameIconComputer.textContent = "paper";
  } else if (computerChoise < 0.6) {
    nameIconComputer.textContent = "scissors";
  } else if (computerChoise < 0.8) {
    nameIconComputer.textContent = "lizard";
  } else {
    nameIconComputer.textContent = "spock";
  }
  return computerChoise;
}

//start game
function game(choice1, choice2) {
  if (choice1 === choice2) {
    resultGame.textContent = "The result is a tie!";
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    } else if (choice2 === "paper") {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    } else if (choice2 === "lizard") {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    } else {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    }
  } else if (choice1 === "paper") {
    if (choice2 === "scissors") {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    } else if (choice2 === "rock") {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    } else if (choice2 === "lizard") {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    } else {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    } else if (choice2 === "rock") {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    } else if (choice2 === "lizard") {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    } else {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    }
  } else if (choice1 === "lizard") {
    if (choice2 === "scissors") {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    } else if (choice2 === "rock") {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    } else if (choice2 === "paper") {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    } else {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    }
  } else if (choice1 === "spock") {
    if (choice2 === "scissors") {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    } else if (choice2 === "rock") {
      resultGame.textContent = "player Win";
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
    } else if (choice2 === "lizard") {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    } else {
      resultGame.textContent = "computer Win";
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
    }
  }
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = "0";
    computerScoreBoard.textContent = "0";
  }
  localStorage.setItem('playScore' , playerScore);
  localStorage.setItem('computerScore' , computerScore);
}
//refresh data choise
function refreshChoise(){
  nameIconClick.textContent = "";
  nameIconComputer.textContent = "";
  playerScoreBoard.textContent = "0";
  computerScoreBoard.textContent = "0";
  resultGame.textContent = "";
}

//Event Listeners
RockIcon.addEventListener("click", clickRockIcon);
PaperIcon.addEventListener("click", clickPaperIcon);
ScissorsIcon.addEventListener("click", clickScissorsIcon);
lizardIcon.addEventListener("click", clicklizardIcon);
SpockIcon.addEventListener("click", clickSpockIcon);
refreshIcon.addEventListener("click", refreshChoise)