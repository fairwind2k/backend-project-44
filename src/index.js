import readlineSync from 'readline-sync';

const attempts = 3;

const play = (gameQuestion, runCustomGameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);
  for (let i = 0; i < attempts; i += 1) {
    const [question, rightAnswer] = runCustomGameFunction();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return `'${userAnswer}' is wrong answer. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
    }
  }
  const finalWords = `Congratulations, ${userName}!`;
  return finalWords;
};

export default play;
