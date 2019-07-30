// Define word options for the hangman game
var Pokemon = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Eevee"];

// Define variables that will record values for the game
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = "";

// Define variables that hold references to HTML elements that will display values

var instructionsText = document.getElementById("instructions-text");
var pokemonLabelText = document.getElementById("Pokemon-label-text");
var currentPokemonText = document.getElementById("current-Pokemon-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");