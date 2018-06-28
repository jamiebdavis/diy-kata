// review
const { numberToReversedDigits } = require('../src');

describe('numberToReversedDigits', () => {
  it("user enters some digits, it returns a array of each digit reversed", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(6789)).toEqual([9, 8, 7, 6]);
  })

  });
