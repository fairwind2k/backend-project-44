#!/usr/bin/env node

import readlineSync from 'readline-sync';

//  Ask user name:
const userName = readlineSync.question('May I have your name? ');

// Greetings for user:
const greetings = (name) => {
  const greetString = `Hello, ${name} !`;
  return greetString;
};

// Set a limit for random number:
const maxNumber = 200;

// Get a random number:
const getRandomInt = (max) => {
  const num = Math.floor(Math.random() * max);
  return num;
};

// Define, is the random number even:
const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

// Set a limit of attempts:
const attempts = 3;

// const gameAnswer = (trueAnswer, userInput) => {
//   const
// }

const isEvenNumber = () => {
  let i = 0;
  let y = 0;
  let finalWords = '';
  while (i < attempts) {
    const resultNumber = getRandomInt(maxNumber);
    const isEvenAnswer = isEven(resultNumber);
    console.log(`Question: ${resultNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEvenAnswer) {
      console.log('Correct!');
      y += 1;
    } else {
      finalWords = `'${answer}' is wrong answer. Correct answer was '${isEvenAnswer}'. Let's try again, ${userName}`;
      break;
    }
    i += 1;
  }
  if (y === 3) {
    finalWords = `Congratulations, ${userName}!`;
  }
  return finalWords;
};

console.log(greetings(userName));
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(isEvenNumber());
