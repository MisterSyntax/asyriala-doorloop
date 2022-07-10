import { calculateScore } from './Timer.helpers';

describe('calculateScore', () => {
  it('should 0s by default well by defaut', () => {
    expect(calculateScore([], [])).toEqual({
      typos: 0,
      wordsPerMinute: 0,
    });
  });

  it('should return proper words', () => {
    expect(calculateScore(['cat'], ['cat'])).toEqual({
      typos: 0,
      wordsPerMinute: 1,
    });
  });

  it('should return typos', () => {
    expect(calculateScore(['blat'], ['slat'])).toEqual({
      typos: 1,
      wordsPerMinute: 0,
    });
  });

  it('should handle a combo of success and typos', () => {
    expect(calculateScore(['blat', 'cat'], ['slat', 'cat'])).toEqual({
      typos: 1,
      wordsPerMinute: 1,
    });
  });

  it('should handle more random words than inputs', () => {
    expect(calculateScore(['blat', 'cat'], ['slat', 'cat', 'fun', 'gun', 'hun'])).toEqual({
      typos: 1,
      wordsPerMinute: 1,
    });
  });
});
