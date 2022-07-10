import * as React from 'react';

/** Design System Components */

/** Components */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** Types */
import { Score } from 'types/Score';

/** helpers */
import { calculateScore } from './Timer.helpers';

interface ITimerProps {
  randomWords: string[];
  setIsGameStarted: (isGameStarted: boolean) => void;
  setScore: (score: Score) => void;
  setUserInput: (input: string[]) => void;
  userInput: string[];
}

export function Timer ({
  randomWords,
  setIsGameStarted,
  setScore,
  setUserInput,
  userInput
}: ITimerProps) {
  const [timeLeft, setTimeLeft] = React.useState(60);

  React.useEffect(() => {
    if(timeLeft <= 0) {
      const score = calculateScore(userInput, randomWords);
      setScore(score);
      setIsGameStarted(false);
    } 
    setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  }, [randomWords, setIsGameStarted, setScore, timeLeft, userInput]);

  return (
    <Box>
      <Typography component='p' variant='h2'>{timeLeft}</Typography>
    </Box>
    
  );
}

export default Timer;
