const programmingLanguages: Array<string> = [
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
let maxWrong: number = 6;
let mistake: number = 0;
let guessed: Array<string> = [];
let wordStatus = null;

const randomWord = () => {
  answer =
    programmingLanguages[
      Math.floor(Math.random() * programmingLanguages.length)
    ];
  console.log(answer);
};

randomWord();
