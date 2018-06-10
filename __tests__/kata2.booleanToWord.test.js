const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
<<<<<<< HEAD
  it('evaluates the truthiness of the value', () => {
    expect(booleanToWord('Hello')).toBe('Yes');
    expect(booleanToWord(45)).toBe('Yes');
    expect(booleanToWord(null)).toBe('No');
    expect(booleanToWord(0)).toBe('No');
});

});
=======
  it("returns yes if true", () => {
    expect(booleanToWord("yes")).toBe(true)
  })
  
  it("returns no if false", () => {
    expect(booleanToWord(0)).toBe(false)
  })
});


>>>>>>> 5d51813a7208f4860ab0f747ca9e30b45df8e407
