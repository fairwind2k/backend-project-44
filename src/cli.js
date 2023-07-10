import readlineSync from 'readline-sync';

const welcome = () => {
  const userName = readlineSync.question('May I have your name? ');
  const greetings = `Hello, ${userName} !`;
  return greetings;
};

export default welcome;
