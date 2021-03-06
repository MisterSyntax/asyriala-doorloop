import * as React from 'react';

/** Design System Components */
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

/** Components */
import Word from './Word/Word';

/** Types */

interface ITypingChallengeProps {
  randomWords: string[],
  userInput: string[],
  setUserInput: (userInput: string[]) => void,
}

export function TypingChallenge ({
  randomWords,
  userInput,
  setUserInput
}: ITypingChallengeProps) {

  return (
    <section>
      <Box sx={{ marginBottom: 2 }}>
        {randomWords.map((word, i) => {
          const isActiveWord = i === userInput.length - 1;
          return (
            <Box 
              component='span'
              key={`box-${i}`}
              sx={{
                borderRadius: 1,
                marginBottom: 1,
                padding: 1,
                border: isActiveWord ? '1px solid ': '',
                borderColor: isActiveWord ? 'primary.main' : '',
                mb: 2
              }}
            >
              <Word word={word} userInput={userInput} i={i}/>
              <span key={`word${i}-space`}>{' '}</span>
            </Box>
          );
        })}
      </Box>
      <TextField
        id="game-input"
        label="game input"
        autoFocus
        value={userInput[userInput.length - 1]}
        onKeyUp ={event => {
          const isCurrentKeyPressBackspace = event.key === 'Backspace';

          if(isCurrentKeyPressBackspace && userInput[userInput.length - 1] === '' && event.key === 'Backspace') {
            setUserInput(userInput.slice(0, -1));
          }
        }}
        onChange={(event) => {
          const isCurrentKeyPressSpace = event.target.value.substring(event.target.value.length - 1)  === ' ';
          const newUserInput = userInput.slice(0, -1);

          if(event.target.value.length > 0 && isCurrentKeyPressSpace) {
            newUserInput.push(event.target.value.slice(0, -1));
            setUserInput([...newUserInput, '']);
          } else {
            newUserInput.push(event.target.value);
              setUserInput(newUserInput);
          }
        }}
      />
    </section>
  );
}

export default TypingChallenge;
