var words = [
    "cat", "ara"
];
function pickWord() {
    return words[Math.floor(Math.random() * words.length)];

}; // отримуємо слово з масиву з відповідями
var word = pickWord();

function setupAnswerArray(word) {
    var answerOfArray = [];
    for (var i = 0; i < word.length; i++) {
        answerOfArray[i] = "_";

    }
    return answerOfArray;
};

var answerArray = setupAnswerArray(word);

function getGuess() {
    return prompt("Guess a letter, or click Cancel to stop playing.");
};

function updateGameState(guess, word, answerArray) {
    var guessLetters = 0;
    for (var j = 0; j < word.length; j++) {

        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            guessLetters++;
        } else if (guess === word[j].toUpperCase()) {
            answerArray[j] = guess.toLowerCase();
            guessLetters++;

        }
    }
    console.log(guessLetters);
    return guessLetters;
};


function showAnswerAndCongratulatePlayer(answerArray) {
 return alert(answerArray.join(" ")) + alert("Good job! The answer was " + word);

};

var remainingLetters = word.length; //(літери, які залишились невгаданими)
var numberOfattempts = word.length * 2; //кількість спроб

while (remainingLetters > 0 && numberOfattempts > 0) {
    alert(answerArray.join(" ")); //перетворюємо масив з рисочками на рядок
    var guess = getGuess();



    /*(введена літера)*/
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter")
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
    numberOfattempts--;
}

showAnswerAndCongratulatePlayer(answerArray);