import getRandomInt from '../helpers/random_number.js';
import play from '../index.js';

// set limits of the progression array:
const minNumProgression = 5;
const maxNumProgression = 10;

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
  const randomIndex = getRandomInt(0, arrLength - 1);
  const randomElem = arr[randomIndex];
  arr.splice(randomIndex, 1, '..');
  const str = arr.join(' ');
  return [str, String(randomElem)];
};

const runBrainProgression = () => play(gameAsk, getProgression);

export default runBrainProgression;
