import getRandomInt from './random_number.js';

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

export default pairs;
