#!/usr/bin/env node

// import readlineSync from 'readline-sync';
import { getRandomInt, play } from '../src/index.js';

const gameAsk = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// set a range for a random number:
const min = 0;
const max = 50;

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const isPrime = () => {
  const num = getRandomInt(min, max);
  const arr = [];
  const elem = isPrimeNumber(num) ? 'yes' : 'no';
  arr.push(String(num));
  arr.push(elem);
  return arr;
};

console.log(play(gameAsk, isPrime));
