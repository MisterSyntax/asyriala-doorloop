import * as React from 'react';

/** Design System Components */
import Typography from '@mui/material/Typography';

/** Components */

/** Types */

/** Helpers */
import { getLetterColor } from './Word.helpers';

interface IAppProps {
  i: number,
  userInput: string[],
  word: string;
}

export function Word ({
  i,
  userInput,
  word
}: IAppProps) {
  const wordRender = React.useMemo(() => {
    return word.split('').map((letter, j) => {
      const isActive = i === userInput.length - 1 && j === userInput[userInput.length - 1]?.length;
      const isCorrect = letter === userInput?.[i]?.[j];
      const hasBeenTyped = i < userInput.length - 1 || (i === userInput.length -1 && j < userInput[userInput.length - 1]?.length);

      return (
        <Typography 
          key={`${i}-letter${j}`}
          component='span'
          variant='h6'
          color={getLetterColor({isActive, isCorrect, hasBeenTyped })}
          sx={{
            fontWeight: 'bold',
            textDecoration: isActive ? 'underline' : '',
          }}
        >
          {letter}
        </Typography>
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput[i]]);

  return (<span>
    {wordRender}
  </span>);
}

export default Word;
