import getRandomInt from '../helpers/random_number.js';
import play from '../index.js';

const gameAsk = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 1;
const max = 200;

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const generateDataAnswer = () => {
  const resultNumber = getRandomInt(min, max);
  const answer = isEven(resultNumber);
  return [String(resultNumber), answer];
};

const runIsEven = () => play(gameAsk, generateDataAnswer);

export default runIsEven;
