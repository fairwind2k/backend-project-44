import getRandomInt from '../helpers/random_number.js';
import play from '../index.js';

const gameAsk = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// set a range for a random number:
const min = 0;
const max = 50;

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateDataAnswer = () => {
  const num = getRandomInt(min, max);
  const answer = isPrimeNumber(num) ? 'yes' : 'no';
  return [num, answer];
};

const runBrainPrime = () => play(gameAsk, generateDataAnswer);

export default runBrainPrime;
