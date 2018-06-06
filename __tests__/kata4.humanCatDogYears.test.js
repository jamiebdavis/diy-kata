const { humanCatDogYears } = require('../src');

describe('humanCatDogYears', () => {
    it('returns array human, cat and dog age from human age input', () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
  });