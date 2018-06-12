const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('evaluates the truthiness of the value', () => {
    expect(booleanToWord('Hello')).toBe('Yes');
    expect(booleanToWord(45)).toBe('Yes');
    expect(booleanToWord(null)).toBe('No');
    expect(booleanToWord(0)).toBe('No');
});

});
