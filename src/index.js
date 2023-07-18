import readlineSync from 'readline-sync';

// Set a limit for random number:

// const minNumber = 0;
// const maxNumber = 10;

// Set a limit of attempts:
const attempts = 3;

// Get a random number:

const getRandomInt = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

// get random pairs of numbers:

const pairs = (min, max) => {
  const array = [];
  const number1 = getRandomInt(min, max);
  array.push(number1);
  const number2 = getRandomInt(min, max);
  if (number1 > number2) {
    array.push(number2);
  } else {
    array.unshift(number2);
  }
  return array;
};

const play = (gameStr, func) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameStr);
  for (let i = 0; i < attempts; i += 1) {
    const [question, rightAnswer] = func();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
  }
  const finalWords = `Congratulations, ${userName}!`;
  return finalWords;
};

export { play, pairs, getRandomInt };
