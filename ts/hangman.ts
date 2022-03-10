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

let answer = '';
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
        `
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

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
