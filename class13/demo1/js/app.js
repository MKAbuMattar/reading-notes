function getRandomNumber(minNumber, maxNumber) {
	return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function rollDice() {
	return getRandomNumber(1, 6);
}

function playGame() {
	let player1 = rollDice();
	let player2 = rollDice();
	let result;

	if (player1 > player2) {
		result = 'player 1 won the round';
	} else if (player2 > player1) {
		result = 'player 2 won the round';
	} else {
		result = "this round is tied";
	}
	console.log(result);

	document.getElementById('result').innerHTML = result;

	return result;
}