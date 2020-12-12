var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");       //ДЯПЧИК
ctx.strokeStyle = "Red"
ctx.lineWidth = 3;

var unCorrectguesses = 0;
function toDrawMan(/*unCorrectguesses*/) {
    ctx.beginPath();
    if (unCorrectguesses > 0) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
    }
    if (unCorrectguesses > 1) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
        ctx.lineTo(70, 70);
    } 
    if (unCorrectguesses > 2) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
        ctx.lineTo(70, 70);
        ctx.lineTo(50, 70);
    }
    if (unCorrectguesses > 3) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
        ctx.lineTo(70, 70);
        ctx.lineTo(50, 70);
        ctx.lineTo(50, 50); //_____
    }
    if (unCorrectguesses > 4) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
        ctx.lineTo(70, 70);
        ctx.lineTo(50, 70);
        ctx.lineTo(50, 50); //________________
        ctx.moveTo(60, 70); //тулуб
        ctx.lineTo(60, 115); //____________
    }
    if (unCorrectguesses > 5) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
        ctx.lineTo(70, 70);
        ctx.lineTo(50, 70);
        ctx.lineTo(50, 50); //________________
        ctx.moveTo(60, 70); //тулуб
        ctx.lineTo(60, 115); //____________
        ctx.moveTo(60, 115); //ліва нога
        ctx.lineTo(70, 135);//_____________
    }
    if (unCorrectguesses > 6) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
        ctx.lineTo(70, 70);
        ctx.lineTo(50, 70);
        ctx.lineTo(50, 50); //________________
        ctx.moveTo(60, 70); //тулуб
        ctx.lineTo(60, 115); //____________
        ctx.moveTo(60, 115); //ліва нога
        ctx.lineTo(70, 135);//_____________
        ctx.moveTo(60, 115); //права нога
        ctx.lineTo(50, 135);//_______
    }
    if (unCorrectguesses > 7) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
        ctx.lineTo(70, 70);
        ctx.lineTo(50, 70);
        ctx.lineTo(50, 50); //________________
        ctx.moveTo(60, 70); //тулуб
        ctx.lineTo(60, 115); //____________
        ctx.moveTo(60, 115); //ліва нога
        ctx.lineTo(70, 135);//_____________
        ctx.moveTo(60, 115); //права нога
        ctx.lineTo(50, 135);//_______
        ctx.moveTo(60, 90); //ліва рука
        ctx.lineTo(75, 80);//_____________
    } 
    if (unCorrectguesses > 8) {
        ctx.moveTo(50, 50); //голова
        ctx.lineTo(70, 50);
        ctx.lineTo(70, 70);
        ctx.lineTo(50, 70);
        ctx.lineTo(50, 50); //________________
        ctx.moveTo(60, 70); //тулуб
        ctx.lineTo(60, 115); //____________
        ctx.moveTo(60, 115); //ліва нога
        ctx.lineTo(70, 135);//_____________
        ctx.moveTo(60, 115); //права нога
        ctx.lineTo(50, 135);//_______
        ctx.moveTo(60, 90); //ліва рука
        ctx.lineTo(75, 80);//_____________
        ctx.moveTo(60, 90); //права рука
        ctx.lineTo(45, 80);
    }
    ctx.stroke();
};

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

var unCorrectguesses = 5; //кількість неправильних відповідей

function updateGameState(guess, word, answerArray) {
    var guessLetters = 0; // кількість вгаданих букв у слові
    for (var j = 0; j < word.length; j++) {

        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            guessLetters++;
        } else if (guess === word[j].toUpperCase() && answerArray[j] === "_") {
            answerArray[j] = guess.toLowerCase();
            guessLetters++;

        } else if (word[j] !== guess) {
            //unCorrectguesses++;
            //console.log("unCorrectguesses " + unCorrectguesses);

        }
    }

    console.log(guessLetters);
    return guessLetters;
};


function showAnswerAndCongratulatePlayer(answerArray) {
    alert(answerArray.join(" "))
    alert("Good job! The answer was " + word);

};

var remainingLetters = word.length; //(літери, які залишились невгаданими)
var numberOfattempts = 3; //кількість спроб

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

toDrawMan(unCorrectguesses);