#!/usr/bin/env node

// import readlineSync from 'readline-sync';
import { pairs, play } from '../src/index.js';

const gameAsk = 'What is the result of the expression?';
const min = 0;
const max = 20;

const getSetConditionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const size = operators.length;
  const randomIndex = Math.floor(Math.random() * size);
  const symbol = operators[randomIndex];
  const arr = pairs(min, max);
  const expression = `${arr[0]} ${symbol} ${arr[1]}`;
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
  const setQandA = [expression, String(res)];
  return setQandA;
};

console.log(play(gameAsk, getSetConditionAndAnswer));
