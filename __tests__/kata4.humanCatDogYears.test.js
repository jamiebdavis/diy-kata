const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
<<<<<<< HEAD
    it('returns array human, cat and dog age from human age input', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
      expect(humanCatDogYears(15)).toEqual([15, 76, 89]);
      expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
=======
    it('returns human, cat and dog years to an array', () => {
      expect(humanCatDogYears(5)).toEqual([ 5, 36, 39 ]);
>>>>>>> 5d51813a7208f4860ab0f747ca9e30b45df8e407
    });
  });
