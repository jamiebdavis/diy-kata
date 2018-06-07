const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it("returns yes if true", () => {
    expect(booleanToWord("yes")).toBe(true)
  })
  
  it("returns no if false", () => {
    expect(booleanToWord(0)).toBe(false)
  })
});


