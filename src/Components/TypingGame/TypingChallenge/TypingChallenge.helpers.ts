interface IGetLetterColor {
  isActive: boolean;
  isCorrect: boolean;
  hasBeenTyped: boolean;
}

export function getLetterColor({
  isActive,
  isCorrect,
  hasBeenTyped,
}: IGetLetterColor) {
  if(!isCorrect && hasBeenTyped) {
    return 'error';
  } else if(isCorrect && hasBeenTyped) {
    return 'success.dark';
  }

  return '';
}
