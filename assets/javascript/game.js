/* Step by step

1. Have the computer pick a letter.
2. User types in letter
3. If correct, add 1 to wins total. Reset game
4. If wrong, add letter to "your guesses so far", subtract 1 from guesses left.
5. If user runs out of guesses, add 1 to loss total, reset game.
6. Don't allow user to guess same letter again. */

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = "";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(getRandomLetter);

document.onkeyup = function(event){

	var key = event.key;

	if (key == getRandomLetter) {
		wins++;
		document.querySelector('#win').innerHTML = "Wins: " + wins;
		guessesLeft = 9;
		document.querySelector('#guess').innerHTML = "Guesses left: " + guessesLeft;
		guessesSoFar = "";
		document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessesSoFar;
		getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(getRandomLetter);
	}
	else {
		if (key == "a" || key == "b" || key == "c" || key == "d" || key == "e" || key == "f" || key == "g" || key == "h" || key == "i" || key == "j" || key == "k" || key == "l" || key == "m" || key == "n" || key == "o" || key == "p" || key == "q" || key == "r" || key == "s" || key == "t" || key == "u" || key == "v" || key == "w" || key == "x" || key == "y" || key == "z" ) {
			if (key !== guessesSoFar.charAt(0) && key !== guessesSoFar.charAt(2) && key !== guessesSoFar.charAt(4) && key !== guessesSoFar.charAt(6) && key !== guessesSoFar.charAt(8) && key !== guessesSoFar.charAt(10) && key !== guessesSoFar.charAt(12) && key !== guessesSoFar.charAt(14) && key !== guessesSoFar.charAt(16)) {
				guessesSoFar += key + " ";
				guessesLeft--;
				document.querySelector('#guess').innerHTML = "Guesses left: " + guessesLeft;
				document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessesSoFar;
			}
		}
	}
	if (guessesLeft == 0) {
		losses++;
		document.querySelector('#loss').innerHTML = "Losses: " + losses;
		guessesLeft = 9;
		document.querySelector('#guess').innerHTML = "Guesses left: " + guessesLeft;
		guessesSoFar = "";
		document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessesSoFar;
		getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(getRandomLetter);
	}

}