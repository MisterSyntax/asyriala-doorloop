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
  
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {(score.wordsPerMinute && <ScoreCard score={score} />) || null}
      <div>
        <Button variant="contained" onClick={() => setIsGameStarted(true)}>
          {!score.wordsPerMinute ? 'Start Game!' : 'Play Again'}
        </Button> 
      </div>
    </Box>
  );
}

export default Home;
