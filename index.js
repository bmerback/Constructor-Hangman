const inquirer = require("inquirer");
const Letter = require('./letter.js');
const Word = require('./word.js');

function newGame() {
	console.log("\nChristmas Hangman, see if you can guess the word!")

	
	var word = new Word();
	var randomWord = word.randomWord;

	
	var currentWord = [];
	for(i = 0; i < randomWord.length; i+=1) {
    	currentWord.push(" _ ");
	}
	console.log(currentWord.join(" ") + "\n");

	var lettersGuessed = [];
	var guessRemain = 5;


	function userInput() {
		var alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
		];
		
		inquirer.prompt([
		{
			name: "letter",
			type: "input",
			message: "enter lowercase letter",
			validate: function (ltr) {
				if (alphabet.indexOf(ltr) === -1) {
					console.log(" invalid entry");
					return false;
				}
				return true;
			}
		}
		]).then(function(answers) {
			startGame(answers.letter);
			});
	}

	function startGame(letter) {
		
		
		if (randomWord.indexOf(letter) === -1) {
			guessRemain--;
			lettersGuessed.push(letter);
			
			
			var showLetter = new Letter(currentWord, randomWord, letter);
			showLetter.incorrect();
			
			console.log("Guesses Remaining: " + guessRemain);
			console.log("Incorrect Letters Guessed: " + lettersGuessed.join(" ") + "\n");
		}
		
		
		if (randomWord.indexOf(letter) !== -1) {
			
			
			var showLetter = new Letter(currentWord, randomWord, letter);
			showLetter.correct();
		}

		
		if (guessRemain === 0) {
			console.log("No guesses left!\n");
			playAgain();
			return;
		}


		if (currentWord.indexOf(" _ ") === -1) {
			console.log("You win!!!\n");
			playAgain();
			return;
		}
	
		userInput();
	}

	
	userInput();
}


function playAgain() {
	inquirer.prompt([
		{
	message: "Would you like to play again?",
	type: "confirm",
	name: "playAgain"
		}
]).then(function(user) {
		if (user.playAgain === true) {
			newGame();
		}
	});
}


newGame();



