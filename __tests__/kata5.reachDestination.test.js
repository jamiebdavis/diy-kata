const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(10, 10)).toEqual("I should be there in 1 hours.");
  });
});
