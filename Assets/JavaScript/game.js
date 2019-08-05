// Define variables that will record values for the game
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var lettersGuessed = [];

// Define variables that hold references to HTML elements that will display values
var randomPokemonText = document.getElementById("random-Pokemon-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

// Define word options for the hangman game
var pokemon = ["BULBASAUR", "IVYSAUR", "VENUSAUR", "CHARMANDER", "CHARMELEON", "CHARIZARD", "SQUIRTLE", "WARTORTLE", "BLASTOISE", "CATERPIE", "METAPOD", "BUTTERFREE", "WEEDLE", "KAKUNA", "BEEDRILL", "PIDGEY", "PIDGEOTTO", "PIDGEOT", "RATTATA", "RATICATE", "SPEAROW", "FEAROW", "EKANS", "ARBOK", "PIKACHU", "RAICHU", "SANDSHREW", "SANDSLASH", "NIDORAN", "NIDORINA", "NIDOQUEEN", "NIDORAN", "NIDORINO", "NIDOKING", "CLEFAIRY", "CLEFABLE", "VULPIX", "NINETALES", "JIGGLYPUFF", "WIGGLYTUFF", "ZUBAT", "GOLBAT", "ODDISH", "GLOOM", "VILEPLUME", "PARAS", "PARASECT", "VENONAT", "VENOMOTH", "DIGLETT", "DUGTRIO", "MEOWTH", "PERSIAN", "PSYDUCK", "GOLDUCK", "MANKEY", "PRIMEAPE", "GROWLITHE", "ARCANINE", "POLIWAG", "POLIWHIRL", "POLIWRATH", "ABRA", "KADABRA", "ALAKAZAM", "MACHOP", "MACHOKE", "MACHAMP", "BELLSPROUT", "WEEPINBELL", "VICTREEBEL", "TENTACOOL", "TENTACRUEL", "GEODUDE", "GRAVELER", "GOLEM", "PONYTA", "RAPIDASH", "SLOWPOKE", "SLOWBRO", "MAGNEMITE", "MAGNETON", "FARFETCH’D", "DODUO", "DODRIO", "SEEL", "DEWGONG", "GRIMER", "MUK", "SHELLDER", "CLOYSTER", "GASTLY", "HAUNTER", "GENGAR", "ONIX", "DROWZEE", "HYPNO", "KRABBY", "KINGLER", "VOLTORB", "ELECTRODE", "EXEGGCUTE", "EXEGGUTOR", "CUBONE", "MAROWAK", "HITMONLEE", "HITMONCHAN", "LICKITUNG", "KOFFING", "WEEZING", "RHYHORN", "RHYDON", "CHANSEY", "TANGELA", "KANGASKHAN", "HORSEA", "SEADRA", "GOLDEEN", "SEAKING", "STARYU", "STARMIE", "MR. MIME", "SCYTHER", "JYNX", "ELECTABUZZ", "MAGMAR", "PINSIR", "TAUROS", "MAGIKARP", "GYARADOS", "LAPRAS", "DITTO", "EEVEE", "VAPOREON", "JOLTEON", "FLAREON", "PORYGON", "OMANYTE", "OMASTAR", "KABUTO", "KABUTOPS", "AERODACTYL", "SNORLAX", "ARTICUNO", "ZAPDOS", "MOLTRES", "DRATINI", "DRAGONAIR", "DRAGONITE", "MEWTWO", "MEW"];

//Select a random pokemon and displays as a set of empty spaces
function getRandomPokemon() {
    return pokemon[Math.floor(Math.random() * pokemon.length)];
}

var randomPokemon = getRandomPokemon();
console.log("Random Pokemon: " + randomPokemon);

var answer = [];

function displayAnswer() {
    for (var i = 0; i < randomPokemon.length; i++) {
        answer[i] = "_";
    }
    randomPokemonText.textContent = String(answer);
}
displayAnswer();

function replaceCommas() {
    var str = randomPokemonText.innerHTML;
    var res = str.replace(/,/g, " ");
    randomPokemonText.innerHTML = res;
}

replaceCommas();

//Display Initial Values for the Game
winsText.textContent = wins;
lossesText.textContent = losses;
guessesLeftText.textContent = guessesLeft;

//Function to eventually reset the game
function resetGame() {
    lettersGuessed = [];
    lettersGuessedText.textContent = lettersGuessed;
    guessesLeft = 6;
    guessesLeftText.textContent = guessesLeft;
    answer = [];
    randomPokemon = getRandomPokemon()
    console.log("New Random Pokemon: " + randomPokemon);
    displayAnswer();
    replaceCommas();
}


//Create a Variable to handle the user inputs
document.onkeyup = function(event) {

    // Defines the valid guesses for the game
    var validGuesses = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ",".","'"];

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
        }
        //For a game-winning guess
        if (!answer.includes("_")){
            alert(randomPokemon + " is correct! You won! Congratulations!");
            wins = wins + 1;
            winsText.textContent = wins;
            resetGame();
        }

    } else if (validGuesses.includes(guess) && !randomPokemon.includes(guess) && !lettersGuessed.includes(guess)) {
        lettersGuessed.push(guess);
        lettersGuessedText.append(guess + " ")
        guessesLeft = guessesLeft - 1;
        guessesLeftText.textContent = guessesLeft;

        //Game Over Scenarios: Alerts for wins and losses; changing the wins/losses; resetting the game
        if (guessesLeft === 0) {
        alert("Game Over. The Pokemon was " + randomPokemon + ".");
        losses = losses + 1;
        lossesText.textContent = losses;
        resetGame();
        }

    } else if (validGuesses.includes(guess) && lettersGuessed.includes(guess)) {
        alert("Letter already guessed!");
    } else {
        alert("Not a valid guess!");
        }
};