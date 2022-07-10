import * as React from 'react';

/** Design System Components */
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/** Components */
import ScoreCard from './ScoreCard/ScoreCard';

/** Types */
import { Score } from 'types/Score';

interface IHomeProps {
  isGameStarted: boolean;
  setIsGameStarted: (isStarted: boolean) => void;
  score: Score;
  setScore: (score: Score) => void;
};

export function Home ({
  isGameStarted,
  setIsGameStarted,
  score,
  setScore,
}: IHomeProps) {

  if(score.wordsPerMinute) {
    return (
      <>
        <Button variant="contained" onClick={() => setIsGameStarted(true)}>
          Play Again
        </Button>
        <ScoreCard score={score} />
      </>
    );
  }
  
  return (
    <>
      {!score.wordsPerMinute && <ScoreCard score={score} />}
      <Button variant="contained" onClick={() => setIsGameStarted(true)}>
        Start Game!
      </Button>
    </>
  );
}

export default Home;
