import pairs from '../helpers/pairs.js';
import play from '../index.js';

const min = 1;
const max = 100;

const gameAsk = 'Find the greatest common divisor of given numbers.';

const getCommonDivisor = () => {
  const arr = [];
  let [a, b] = pairs(min, max);
  arr.push(`${String(a)} ${String(b)}`);
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const divisor = a + b;
  arr.push(String(divisor));
  return arr;
};

const runBrainGcd = () => play(gameAsk, getCommonDivisor);

export default runBrainGcd;
