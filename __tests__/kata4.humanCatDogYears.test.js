const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns human, cat and dog years to an array', () => {
      expect(humanCatDogYears(5)).toEqual([5, 36, 3]);
      expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    });
  });
