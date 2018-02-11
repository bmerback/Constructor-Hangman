
var Word = function () {

	var wordBank = [
		"LeBron James", "Kevin Durant", "Stephen Curry", "Luc Richar Mbah a Moute", "Chris Paul", "Giannis Antetokounmpo"
		];

	this.randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}	

module.exports = Word;


