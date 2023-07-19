#!/usr/bin/env node

// import readlineSync from 'readline-sync';
import { getRandomInt, play } from '../src/index.js';

// set limits of the progression array:
const minNumProgression = 5;
const maxNumProgression = 11;

// set a range for a difference:
const minDiff = 1;
const maxDiff = 10;

// set a range for a random first element in a progression:
const minFirst = 1;
const maxFirst = 100;

const gameAsk = 'What number is missing in the progression?';

const getProgression = () => {
  const arr = [];
  const difference = getRandomInt(minDiff, maxDiff);
  const firstElem = getRandomInt(minFirst, maxFirst);
  arr.push(firstElem);
  const arrLength = getRandomInt(minNumProgression, maxNumProgression);
  let num = firstElem;
  for (let i = 1; i < arrLength; i += 1) {
    num += difference;
    arr.push(num);
  }
  const randomIndex = getRandomInt(0, arrLength);
  const randomElem = arr[randomIndex];
  arr.splice(randomIndex, 1, '..');
  const str = arr.join(' ');
  return [str, String(randomElem)];
};

console.log(play(gameAsk, getProgression));
