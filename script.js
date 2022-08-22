function playRound(playerSelection, computerSelection) {
		if (playerSelection === computerSelection){
			return ("It's tie !!");
		}else if (playerSelection === "rock" && computerSelection === "paper"){
			return ("You lose ! Paper beats rock");
		}else if (playerSelection === "rock" && computerSelection === "scissor"){
			return ("You won ! Rock breaks Scissor");
		}else if (playerSelection === "paper" && computerSelection === "rock"){
			return ("You won ! Paper beats rock");
		}else if (playerSelection === "paper" && computerSelection === "scissor"){
			return ("You lose ! Scissor cuts Paper");
		}else if (playerSelection === "scissor" && computerSelection === "rock"){
			return ("You lose ! Rock breaks Scissor");
		}else if (playerSelection === "scissor" && computerSelection === "paper"){
			return ("You won ! Scissor cuts Paper");
		}
	
	
	
	
}

function getComputerChoice(){
	const cars = ["rock", "paper", "scissor"];
	randNumb = Math.floor(Math.random()*3);
	return cars[randNumb];
	
}
 
const playerSelection = prompt("Enter your choice", "rock");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//console.log(getComputerChoice());


