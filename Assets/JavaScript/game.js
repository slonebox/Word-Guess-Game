// Define word options for the hangman game
var pokemon = ["BULBASAUR","CHARMANDER","SQUIRTLE","PIKACHU","EEVEE"];
console.log("Pokemon Options:" + pokemon)

// Define variables that will record values for the game
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
console.log( "Wins: " + wins, "Losses: " + losses, "Guesses Left: " + guessesLeft, "Letters Guessed: " + lettersGuessed);

// Define variables that hold references to HTML elements that will display values
var instructionsText = document.getElementById("instructions-text");
var pokemonLabelText = document.getElementById("Pokemon-label-text");
var currentPokemonText = document.getElementById("current-Pokemon-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

//Reference for figuring out how to make onclick event work
clickFunction = function() {
    console.log("I was clicked");
}

//Select a random pokemon
var randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    console.log("Random Pokemon Generated: " + randomPokemon);
    

//Displays random word as an series of empty spaces to guess
var answer = [];
for (var i = 0; i < randomPokemon.length; i++) {
    answer[i] = "_";
    currentPokemonText.append(answer[i] + " ");
}
console.log("Letters to Guess: " + answer);

//Tracks # of letters remaining in word
var answerLength = randomPokemon.length;
console.log("Answer Length: " + answerLength);

//Create a Variable to handle the user inputs
document.onkeyup = function(event) {

    // Defines the valid guesses for the game
    var validGuesses = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    // Event listener which stores the pressed key as an UpperCase letter
    var guess = (event.key);
    guess = guess.toUpperCase();

    // Checks if keystroke is a valid guess, stores it in letters guessed, ensures only new valid letters can be guessed
    if (validGuesses.includes(guess) && lettersGuessed.includes(guess) === false) {
        console.log(guess);

        //Store guess into lettersGuessed array
        lettersGuessed.push(guess);
        console.log("Letters Guessed: " + lettersGuessed);

        //Adds guessed letter to HTML list
        lettersGuessedText.append(guess + ", ")
    };
    
    // Checks if keystokes any of the letters in the randomPokemon, stores them in the currentPokemonText, adjusts guessesLeft if incorrect
    if (randomPokemon.includes(guess)){
        console.log("Includes Letter: Yes");
    } else {
        console.log("Includes Letter: No");
    }
};
        

    //Check if the randomPokemon contains the letter the user chose
        // for ( var i = 0; i < randomPokemon.length; i++ ) {
        //  if letter is present, print the letter in the appropriate place on the screen AND log it in the "already guessed" area.
        //  if the letter is not present, reduce number of guesses left
        //