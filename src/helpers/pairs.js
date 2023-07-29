import getRandomInt from './random_number.js';

const pairs = (min, max) => {
  const number1 = getRandomInt(min, max);
  const number2 = getRandomInt(min, max);
  return (number1 > number2) ? [number1, number2] : [number2, number1];
};

export default pairs;
