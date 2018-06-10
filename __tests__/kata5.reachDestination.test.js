const { reachDestination } = require('../src');

describe('reachDestination', () => {
  it('returns string with estimated time of arrival', () => {
    expect(reachDestination(100, 5)).toEqual(0 + ':' + 20)
    expect(reachDestination(500, 5)).toEqual(1 + ':' + 40)
    expect(reachDestination(1000, 1)).toEqual(16 + ':' + 40)

  });
});
