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

const getProgression = (firstElem, progressionStep, progressionLength) => {
  const progression = [firstElem];
  let num = firstElem;
  for (let i = 1; i < progressionLength; i += 1) {
    num += progressionStep;
    progression.push(num);
  }
  return progression;
};

const generateDataAnswer = () => {
  const firstElem = getRandomInt(minFirst, maxFirst);
  const size = getRandomInt(minNumProgression, maxNumProgression);
  const step = getRandomInt(minDiff, maxDiff);
  const numbers = getProgression(firstElem, step, size);
  const randomIndex = getRandomInt(0, numbers.length - 1);
  const randomElem = numbers[randomIndex];
  numbers.splice(randomIndex, 1, '..');
  const question = numbers.join(' ');
  return [question, String(randomElem)];
};

const runBrainProgression = () => play(gameAsk, generateDataAnswer);

export default runBrainProgression;
