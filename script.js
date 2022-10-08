function playRound(element) {

	let playerSelection = '';
	if (element === "r"){
		playerSelection = 'rock';


	}else if (element === "p"){
		playerSelection = 'paper';
	}else if (element === "s"){
		playerSelection = 'scissor';
	}

	let computerSelection = getComputerChoice();
	const BotRock = document.querySelector('#BotRock');
	const BotPaper = document.querySelector('#BotPaper');
	const BotScissor = document.querySelector('#BotScissor');
	let bgcolor = '#0fb4d1';
	let color = '#1d2a2c';

	if(computerSelection === "rock"){
		BotRock.style.backgroundColor = bgcolor;
		BotPaper.style.backgroundColor = '';
		BotScissor.style.backgroundColor = '';

		BotRock.style.color = color;
		BotPaper.style.color = bgcolor;
		BotScissor.style.color = bgcolor;

	}else if(computerSelection === "paper"){
		BotRock.style.backgroundColor = '';
		BotPaper.style.backgroundColor = bgcolor;
		BotScissor.style.backgroundColor = '';

		BotRock.style.color = bgcolor;
		BotPaper.style.color = color;
		BotScissor.style.color = bgcolor;

	}else if(computerSelection === "scissor"){
		BotRock.style.backgroundColor = '';
		BotPaper.style.backgroundColor = '';
		BotScissor.style.backgroundColor = bgcolor;

		BotRock.style.color = bgcolor;
		BotPaper.style.color = bgcolor;
		BotScissor.style.color = color;
	}
	 


	console.log(computerSelection, playerSelection);
	if (playerSelection === computerSelection){
		//return ("It's tie !!");
		return "tie";
	}else if (playerSelection === "rock" && computerSelection === "paper"){
		//return ("You lose ! Paper beats rock");
		//document.getElementById("middleBox3").innerText = "You lose ! Paper beats rock";
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
	let ele = ["rock", "paper", "scissor"];
	randNumb = Math.floor(Math.random()*3);
	return ele[randNumb];

}

function game(element){
	let playerSum = 0;
	let compSum = 0;
	// for (let i = 0; i < 5; i++) {
	//console.log(i);
	let result = playRound(element);
	if (result === "player"){
		playerSum = playerSum + 1;
		document.getElementById("middleBox3").innerHTML = "You Won !!";
		document.getElementById("YouWinLoss").innerHTML = "Won";
		document.getElementById("BotWinLoss").innerHTML = "Lose";
	}else if (result === "comp"){
		compSum = compSum + 1;
		document.getElementById("middleBox3").innerHTML = "Bot Won !!";
		document.getElementById("YouWinLoss").innerHTML = "Lose";
		document.getElementById("BotWinLoss").innerHTML = "Won";
		
	}else{
		document.getElementById("middleBox3").innerHTML = "F*cking Tie !!";
		document.getElementById("YouWinLoss").innerHTML = "Tie";
		document.getElementById("BotWinLoss").innerHTML = "Tie";
	}
}
	


let rock = document.getElementById("rock")
rock.addEventListener("click", function() {game(element = "r")});

let paper = document.getElementById("paper")
paper.addEventListener("click", function() {game("p")});

let scissor = document.getElementById("scissor")
scissor.addEventListener("click", function() {game("s")});

