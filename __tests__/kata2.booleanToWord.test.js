const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it("returns yes if true", () => {
    expect(booleanToWord("test")).toBe("Yes");
    expect(booleanToWord(1)).toBe("Yes")
  })
  
  it("returns no if false", () => {
    expect(booleanToWord(false)).toBe("No");
    expect(booleanToWord(0)).toBe("No")
  })
});


