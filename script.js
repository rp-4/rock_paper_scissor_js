//document.getElementById("resBot").innerHTML = "Bot: 1";


function playRound() {
	const playerInput = prompt("Enter your choice", "Rock");
	let playerSelection = playerInput.toLowerCase();
	const computerSelection = getComputerChoice();
	console.log(computerSelection, playerInput);
	if (playerSelection === computerSelection){
		//return ("It's tie !!");
		return "tie";
	}else if (playerSelection === "rock" && computerSelection === "paper"){
		//return ("You lose ! Paper beats rock");
		return "comp";
	}else if (playerSelection === "rock" && computerSelection === "scissor"){
		//return ("You won ! Rock breaks Scissor");
		return "player";
	}else if (playerSelection === "paper" && computerSelection === "rock"){
		//return ("You won ! Paper beats rock");
		return "player";
	}else if (playerSelection === "paper" && computerSelection === "scissor"){
		//return ("You lose ! Scissor cuts Paper");
		return "comp";
	}else if (playerSelection === "scissor" && computerSelection === "rock"){
		//return ("You lose ! Rock breaks Scissor");
		return "comp";
	}else if (playerSelection === "scissor" && computerSelection === "paper"){
		//return ("You won ! Scissor cuts Paper");
		return "player";
	}
}


function getComputerChoice(){
const cars = ["rock", "paper", "scissor"];
randNumb = Math.floor(Math.random()*3);
return cars[randNumb];

}

function game(){
let playerSum = 0;
let compSum = 0;
for (let i = 0; i < 5; i++) {
	console.log(i);
	let result = playRound();
	if (result === "player"){
		playerSum = playerSum + 1;
	}else if (result === "comp"){
		compSum = compSum + 1;
	}
}
if (playerSum > compSum){
	document.getElementById("resBot").innerHTML = "Bot: 0";
	document.getElementById("resPlayer").innerHTML = "Player: 1";
	return "Player Won the game !!";
}else if (playerSum < compSum){
	document.getElementById("resBot").innerHTML = "Bot: 1";
	document.getElementById("resPlayer").innerHTML = "Player: 0";
	return "Computer Won the game !!";
}else if (playerSum === compSum){
	document.getElementById("resBot").innerHTML = "Oh Fuck, It's a tie !!";
	document.getElementById("resPlayer").innerHTML = "";
	document.getElementById("vs").innerHTML = "";
	return "Oh Fu*k, It's a tie !!";
}

}



//console.log(playRound(playerSelection, computerSelection));
console.log(game());
//console.log(getComputerChoice());

