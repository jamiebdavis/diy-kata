const { fizzBuzz } = require('../src');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
     expect(fizzBuzz(3)).toBe("Fizz");
     expect(fizzBuzz(6)).toBe("Fizz");
  });

  it('returns Buzz when passed a multiple of 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

});
