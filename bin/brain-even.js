#!/usr/bin/env node

// import readlineSync from 'readline-sync';
import { getRandomInt, play } from '../src/index.js';

const gameAsk = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxNumber = 200;

// Define, is the random number even:
const isEven = () => {
  const arr = [];
  const resultNumber = getRandomInt(maxNumber);
  arr.push(String(resultNumber));
  if (resultNumber % 2 === 0) {
    arr.push('yes');
  } else {
    arr.push('no');
  }
  return arr;
};

console.log(play(gameAsk, isEven));
