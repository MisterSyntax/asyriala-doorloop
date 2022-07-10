import * as React from 'react';

/** Design System Components */
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

/** Components */

/** Types */
import { Score } from 'types/Score';

interface IScoreCardProps {
  score: Score
}

export function ScoreCard ({
  score
}: IScoreCardProps) {
  return (
    <Box sx={{ mt: 2, width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Typography>
        <Typography component='b' sx={{fontWeight: 'bold'}}>Words per minute :</Typography>
        <Typography component='span'> {score.wordsPerMinute}</Typography>
      </Typography>
      <Typography>
        <Typography component='b' sx={{fontWeight: 'bold'}}>Typos :</Typography>
        <Typography component='span'> {score.typos}</Typography>
      </Typography>
    </Box>
  );
}

export default ScoreCard;
