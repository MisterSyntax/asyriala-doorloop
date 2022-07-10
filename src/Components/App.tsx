import * as React from 'react';

/** Design System Components */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

/** Components */
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import Home from './Home/Home';

/** Types */
import { Score } from 'types/Score';
import TypingGame from './TypingGame/TypingGame';

export default function App () {
  const [score, setScore] = React.useState<Score>({
    wordsPerMinute: 0,
    typos: 0,
  });
  const [isGameStarted, setIsGameStarted] = React.useState(true);
 
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='md'> 
        <Header />
        <Box
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            mt: 8,
            width: '100%',
          }}
        >
          {!isGameStarted 
            ? <Home 
                isGameStarted={isGameStarted}
                setIsGameStarted={setIsGameStarted}
                score={score}
                setScore={setScore}
              />
            : <TypingGame 
                isGameStarted={isGameStarted}
                setScore={setScore}
                setIsGameStarted={setIsGameStarted}
              />
          }
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
