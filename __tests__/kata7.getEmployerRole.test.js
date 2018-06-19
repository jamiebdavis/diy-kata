const { getEmployerRole } = require('../src');

describe('getEmployerRole', () => {
  it('returns the employee\'s role in the company', () => {
    expect(getEmployerRole("Javid", employees)).toBe('Human Resources Assistant');
    expect(getEmployerRole("Satti", employees)).toBe("Developer")

  });
});



