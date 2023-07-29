import pairs from '../helpers/pairs.js';
import play from '../index.js';

const gameAsk = 'What is the result of the expression?';
const min = 0;
const max = 20;

const getExpression = (rundomSymbol, numbers) => {
  let res = 0;
  switch (rundomSymbol) {
    case '+':
      res = numbers[0] + numbers[1];
      break;
    case '-':
      res = numbers[0] - numbers[1];
      break;
    case '*':
      res = numbers[0] * numbers[1];
      break;
    default:
      res = null;
  }
  return res;
};

const getSetConditionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const size = operators.length;
  const randomIndex = Math.floor(Math.random() * size);
  const symbol = operators[randomIndex];
  const rundomNumbers = pairs(min, max);
  const expression = `${rundomNumbers[0]} ${symbol} ${rundomNumbers[1]}`;
  const res = getExpression(symbol, rundomNumbers);
  const setQandA = [expression, String(res)];
  return setQandA;
};

const runBrainCalc = () => play(gameAsk, getSetConditionAndAnswer);

export default runBrainCalc;
