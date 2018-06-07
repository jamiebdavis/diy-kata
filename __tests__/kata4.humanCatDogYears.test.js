const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns array human, cat and dog age from human age input', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
      expect(humanCatDogYears(15)).toEqual([15, 76, 89]);
      expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    });
  });
