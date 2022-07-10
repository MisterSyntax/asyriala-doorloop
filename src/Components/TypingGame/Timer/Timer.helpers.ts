import { Score } from 'types/Score';

export function calculateScore(userInput: string[], randomWords: string[]): Score {
  const correctWords = userInput.reduce((sum, currentWord, index) => {
    return currentWord === randomWords[index] ? sum + 1 : sum;
  }, 0);

  return {
    typos: userInput.length - correctWords,
    wordsPerMinute: correctWords,
  };
}