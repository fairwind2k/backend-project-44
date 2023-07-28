import getRandomInt from '../helpers/random_number.js';
import play from '../index.js';

const gameAsk = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 200;

// Define, is the random number even:
const isEven = () => {
  const arr = [];
  const resultNumber = getRandomInt(min, max);
  arr.push(String(resultNumber));
  if (resultNumber % 2 === 0) {
    arr.push('yes');
  } else {
    arr.push('no');
  }
  return arr;
};

const runIsEven = () => play(gameAsk, isEven);

export default runIsEven;
