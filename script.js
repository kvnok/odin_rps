function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else if (playerSelection === "rock") {
		if (computerSelection === "paper") {
			return "You lose! Paper beats rock.";
		} else {
			return "You win! Rock beats scissors.";
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			return "You win! Paper beats rock.";
		} else {
			return "You lose! Scissors beats paper.";
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			return "You lose! Rock beats scissors.";
		} else {
			return "You win! Scissors beats paper.";
		}
	}
}

function incrementValue(element) {
	let value = parseInt(element.innerText);
	value++;
	element.innerText = value;
}

function playGame(move) {
	const cpuChoice = getComputerChoice();
	const result = playRound(move, cpuChoice);
	const resultElement = document.getElementById("result");
	resultElement.innerText = result;

	const winsElement = document.getElementsByClassName("wins");
	const lossesElement = document.getElementsByClassName("losses");
	const tiesElement = document.getElementsByClassName("ties");	
	if (result.includes("win")) {
		incrementValue(winsElement[0]);
	}
	else if (result.includes("lose")) {
		incrementValue(lossesElement[0]);
	}
	else {
		incrementValue(tiesElement[0]);
	}
	const cpuElement = document.getElementById("cpu");
	cpuElement.innerText = cpuChoice;
}
