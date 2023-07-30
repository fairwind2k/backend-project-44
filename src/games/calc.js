import pairs from '../helpers/pairs.js';
import getRandomInt from '../helpers/random_number.js';
import play from '../index.js';

const gameAsk = 'What is the result of the expression?';
const min = 0;
const max = 20;

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const getSetConditionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const size = operators.length;
  const randomIndex = getRandomInt(min, size - 1);
  const symbol = operators[randomIndex];
  const [num1, num2] = pairs(min, max);
  const expression = `${num1} ${symbol} ${num2}`;
  const res = calculate(symbol, num1, num2);
  const setQandA = [expression, String(res)];
  return setQandA;
};

const runBrainCalc = () => play(gameAsk, getSetConditionAndAnswer);

export default runBrainCalc;
