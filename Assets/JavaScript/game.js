// Define variables that will record values for the game
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
console.log( "Wins: " + wins, "Losses: " + losses, "Guesses Left: " + guessesLeft, "Letters Guessed: " + lettersGuessed);

// Define variables that hold references to HTML elements that will display values
var instructionsText = document.getElementById("instructions-text");
var pokemonLabelText = document.getElementById("Pokemon-label-text");
var randomPokemonText = document.getElementById("random-Pokemon-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

// Define word options for the hangman game
var pokemon = ["BULBASAUR","CHARMANDER","SQUIRTLE","PIKACHU","EEVEE"];
console.log("Pokemon Options:" + pokemon)

//Select a random pokemon and displays as a set of empty spaces
var randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    console.log("Random Pokemon Generated: " + randomPokemon);
var answer = [];
for (var i = 0; i < randomPokemon.length; i++) {
    answer[i] = "_";
}
 
randomPokemonText.textContent = String(answer);

function replaceCommas() {
    var str = randomPokemonText.innerHTML;
    var res = str.replace(/,/g, " ");
    randomPokemonText.innerHTML = res;
}

replaceCommas();


//Display Initial Values for the Game
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;


//Create a Variable to handle the user inputs
document.onkeyup = function(event) {

    // Defines the valid guesses for the game
    var validGuesses = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    // Event listener which stores the pressed key as an UpperCase letter
    var guess = (event.key);
    guess = guess.toUpperCase();

    // Checks if keystroke is a valid guess, stores it in letters guessed array, adds letters guessed to HTML ensures only new valid letters can be guessed, checks if letter is included in randomPokemon,adds letter if so, accounts for win/loss clinching guesses
    if (validGuesses.includes(guess) && randomPokemon.includes(guess) && !lettersGuessed.includes(guess)) {
        lettersGuessed.push(guess);
        lettersGuessedText.append(guess + " ");
        for (var k = 0; k < randomPokemon.length; k++) {
            if (randomPokemon.charAt(k) === guess) {
            //Inserts the correctly guessed letter into the appropriate slot(s) in the answer variable

            answer.splice(k,1,guess);
            } else {
            answer.splice(k,0);
            }
        randomPokemonText.textContent = answer;
        replaceCommas();
        console.log(randomPokemonText);
        }
        //For a game-winning guess
        if (!answer.includes("_")){
            alert("You won! Congratulations!");
            wins = wins + 1;
            winsText.textContent = "Wins: " + wins;
        }

    } else if (validGuesses.includes(guess) && !randomPokemon.includes(guess) && !lettersGuessed.includes(guess)) {
        lettersGuessed.push(guess);
        lettersGuessedText.append(guess + " ")
        guessesLeft = guessesLeft - 1;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

        //Game Over Scenarios: Alerts for wins and losses; changing the wins/losses; resetting the game
        if (guessesLeft === 0) {
        alert("Game Over. The Pokemon was " + randomPokemon + ".");
        losses = losses + 1;
        lossesText.textContent = "Losses: " + losses;
        }
    } else if (validGuesses.includes(guess) && lettersGuessed.includes(guess)) {
        alert("Letter already guessed!");
    } else {
        alert("Not a valid guess!");
        }
};

    //Check if the randomPokemon contains the letter the user chose
        // for ( var i = 0; i < randomPokemon.length; i++ ) {
        //  if letter is present, print the letter in the appropriate place on the screen AND log it in the "already guessed" area.
        //  if the letter is not present, reduce number of guesses left
        //

//Reference for figuring out how to make onclick event work
clickFunction = function() {
    console.log("I was clicked");
}
