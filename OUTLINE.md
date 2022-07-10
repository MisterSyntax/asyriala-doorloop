# Application Component and Data Outline

App
  - dec: isGameStarted, setIsGameStarted
  - dec: score, setScore
  Components
    Layout
      Title d
      Footer
    Home
      - isGameStarted, setIsGameStarted
      - score, setScore
      Score:
        score
    TypingGame 
      - Dec: userInput, setUserInput
      - Dec: radomWords
      - setScore
      - isGameStarted, setIsGameStarted
      Timer (ends the game and calcualtes score)
        - Dec: timeLeft, setTimeLeft
        - userInput, setUserInput
        - randomWords
        - setScore
        - setIsGameStarted
        - helper: calculateScore
      TypingChallenge
        - random words 
        - userInput, setUserInput


# Types
Score: {
  wordsPerMinute: int
  typo: int
  initials: string
}

