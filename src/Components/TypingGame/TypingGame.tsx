import * as React from 'react';

/** Design System Components */

/** Components */
import Timer from './Timer/Timer';
import TypingChallenge from './TypingChallenge/TypingChallenge';

/** Types */
import { Score } from 'types/Score';

/** Helpers */
import { getRandomWords } from './TypingGame.helpers';

interface ITypingGameProps {
  isGameStarted: boolean
  setScore: (score: Score) => void;
  setIsGameStarted: (isGameStarted: boolean) => void;
}

export function TypingGame ({
  isGameStarted,
  setIsGameStarted,
  setScore,
}: ITypingGameProps) {
  const [userInput, setUserInput] = React.useState<string[]>(['']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [randomWords, _] = React.useState(getRandomWords());

  React.useEffect(() => {
    setUserInput(['']);
  }, [isGameStarted]);

  return (
    <div>
      <Timer 
        userInput={userInput} 
        setUserInput={setUserInput}
        randomWords={randomWords}
        setScore={setScore}
        setIsGameStarted={setIsGameStarted}
      />
      <TypingChallenge
        randomWords={randomWords}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  );
}

export default TypingGame;
