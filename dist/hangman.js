"use strict";
var programmingLanguages = [
    'javascript',
    'python',
    'typescript',
    'java',
    'json',
    'mongodb',
    'php',
    'sql',
    'ruby',
    'c',
    'html',
    'css',
];
var answer = '';
var maxWrong = 6;
var mistake = 0;
var guessed = [];
var wordStatus = null;
var randomWord = function () {
    answer =
        programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)];
};
var generateButtons = function () {
    var buttonHtml = 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .map(function (letter) {
        return "\n  <button class='btn btn-lg btn-primary m-2'\n    id = '" +
            letter +
            "'\n    onClick=\"handleGuess('" +
            letter +
            "')\"\n  >\n  " +
            letter +
            "\n  </button>\n  ";
    })
        .join('');
    document.getElementById('keyboard').innerHTML = buttonHtml;
};
var guessedWord = function () {
    wordStatus = answer
        .split('')
        .map(function (letter) { return (guessed.indexOf(letter) >= 0 ? letter : ' _ '); })
        .join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
};
var handleGuess = function (chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    }
    else if (answer.indexOf(chosenLetter) === -1) {
        mistake++;
        updateMistake();
        checkIfGameLost();
        updateHangmanPicture();
    }
};
var updateHangmanPicture = function () {
    var updatePicture = document.getElementById('hangmanPic');
    updatePicture.src = './images/' + mistake + '.jpg';
};
var checkIfGameWon = function () {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!!';
    }
};
var checkIfGameLost = function () {
    if (mistake === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML =
            'The answer was : ' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!';
    }
};
var reset = function () {
    mistake = 0;
    guessed = [];
    // document.createElement('img').src = './images/0.jpg';
    var resetPicture = document.getElementById('hangmanPic');
    resetPicture.src = './images/0.jpg';
    randomWord();
    guessedWord();
    updateMistake();
    generateButtons();
};
var updateMistake = function () {
    document.getElementById('mistake').innerHTML = '' + mistake;
};
document.getElementById('maxWrong').innerHTML = '' + maxWrong;
randomWord();
generateButtons();
guessedWord();
//# sourceMappingURL=hangman.js.map