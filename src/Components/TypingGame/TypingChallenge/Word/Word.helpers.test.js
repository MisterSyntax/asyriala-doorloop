import { getLetterColor } from './Word.helpers';

describe('getLetterColor', () => {
  it('returns error if isnt correct and has been typed', () => {
    expect(getLetterColor({
      isCorrect: false,
      hasBeenTyped: true
    })).toEqual('error');
  });
  it('returns success if isnt correct and has been typed', () => {
    expect(getLetterColor({
      isCorrect: true,
      hasBeenTyped: true
    })).toEqual('success.dark');
  });
  it('returns nothing if hasnt been typed typed', () => {
    expect(getLetterColor({
      hasBeenTyped: false
    })).toEqual('');
  });
});
