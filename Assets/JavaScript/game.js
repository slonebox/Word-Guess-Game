// Define word options for the hangman game
var pokemon = ["BULBASAUR","CHARMANDER","SQUIRTLE","PIKACHU","EEVEE"];

// Define variables that will record values for the game
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = [];

//Variable for the start button
var startButton = document.getElementById("start-button");

// Define variables that hold references to HTML elements that will display values
var instructionsText = document.getElementById("instructions-text");
var pokemonLabelText = document.getElementById("Pokemon-label-text");
var currentPokemonText = document.getElementById("current-Pokemon-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");



//Select a random pokemon
var randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
console.log(randomPokemon);

//Displays random word as an series of empty spaces to guess
var answer = [];
for (var i = 0; i < randomPokemon.length; i++) {
    answer[i] = "_";
}
console.log(answer);





var remainingLetters = randomPokemon.length;
//Need to figure out a way to print this name to the HTML"

//Add Event Listener for when User Guesses a Letter with document.addEventListener("keyup", function(event) {}

    //Check if the randomPokemon contains the letter the user chose
        // for ( var i = 0; i < randomPokemon.length; i++ ) {
        //  if letter is present, print the letter in the appropriate place on the screen AND log it in the "already guessed" area.
        //  if the letter is not present, reduce number of guesses left
        // }

//

