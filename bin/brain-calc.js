#!/usr/bin/env node

// import readlineSync from 'readline-sync';
import { pairs, play } from '../src/index.js';

const gameAsk = 'What is the result of the expression?';

const getSetConditionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const size = operators.length;
  const randomIndex = Math.floor(Math.random() * size);
  const symbol = operators[randomIndex];
  const arr = pairs();
  const str = `${arr[0]} ${symbol} ${arr[1]}`;
  let res;
  switch (symbol) {
    case '+':
      res = arr[0] + arr[1];
      break;
    case '-':
      res = arr[0] - arr[1];
      break;
    case '*':
      res = arr[0] * arr[1];
      break;
    default:
      res = null;
  }
  const setQandA = [str, String(res)];
  return setQandA;
};

// get an array of conditions and answers:

const getSet = () => {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const elem = getSetConditionAndAnswer();
    arr.push(elem);
  }
  return arr;
};

const set = getSet();
console.log(play(gameAsk, set));
