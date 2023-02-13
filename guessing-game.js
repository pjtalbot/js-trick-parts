function guessingGame() {
	// Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from the player.

	//     Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

	// After a correct guess, the game ends.

	let randomNumber = Math.floor(Math.random() * 100);
	let gameOver = false;
	let numGuesses = 0;

	return function guess(num) {
		if (num === randomNumber) {
			gameOver = true;
			numGuesses++;
			return `${num} is correct`;
		}
		if (num < randomNumber) return `${num} is too low`;
		if (num > randomNumber) return `${num} is too high`;
	};

	// check if number is too low or high of correct, and log that

	// How would closures keep this secret?
}

module.exports = { guessingGame };
