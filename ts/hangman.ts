const programmingLanguages = [
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

let answer: string = '';
let maxWrong = 6;
let mistake = 0;
let guessed = [];
let wordStatus = null;

const randomWord = () => {
  answer =
    programmingLanguages[
      Math.floor(Math.random() * programmingLanguages.length)
    ];
};

const generateButtons = () => {
  let buttonHtml = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map(
      (letter) =>
        `
  <button class='btn btn-lg btn-primary m-2'
    id = '` +
        letter +
        `'
    onClick="handleGuess('` +
        letter +
        `')"
  >
  ` +
        letter +
        `
  </button>
  `
    )
    .join('');

  document.getElementById('keyboard').innerHTML = buttonHtml;
};

const guessedWord = () => {
  wordStatus = answer
    .split('')
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : ' _ '))
    .join('');

  console.log(answer);

  console.log(
    answer
      .split('')
      .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : ' _ '))
  );
  document.getElementById('wordSpotlight').innerHTML = wordStatus;
};

const handleGuess = (chosenLetter) => {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistake++;
    updateMistake();
    checkIfGameLost();
    updateHangmanPicture();
  }
};

const updateHangmanPicture = () => {
  const aaa = document.getElementById('hangmanPic') as HTMLImageElement;
  aaa.src = './images/' + mistake + '.jpg';
};

const checkIfGameWon = () => {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!';
  }
};

const checkIfGameLost = () => {
  if (mistake === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML =
      'The answer was : ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!';
  }
};

const reset = () => {
  mistake = 0;
  guessed = [];

  document.createElement('img').src = './images/0.jpg';
  // document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistake();
  generateButtons();
};

const updateMistake = () => {
  document.getElementById('mistake').innerHTML = mistake;
};

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
