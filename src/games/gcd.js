import pairs from '../helpers/pairs.js';
import play from '../index.js';

const min = 1;
const max = 100;

const gameAsk = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const generateDataAnswer = () => {
  const [number1, number2] = pairs(min, max);
  const question = `${String(number1)} ${String(number2)}`;
  const divisor = getCommonDivisor(number1, number2);
  return [question, String(divisor)];
};

const runBrainGcd = () => play(gameAsk, generateDataAnswer);

export default runBrainGcd;
