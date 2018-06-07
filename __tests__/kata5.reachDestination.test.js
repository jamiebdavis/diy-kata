const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(10, 5)).toEqual(2)
    expect(reachDestination(20, 4)).toEqual(5)
  });
});
