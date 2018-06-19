const { getEmployerRole } = require('../src');
const employees = [{
  name: 'Satti',
  role: 'Developer'
}, {
  name: 'Jenny',
  role: 'Sales Associate'
}, {
  name: 'Javid',
  role: 'Human Resources Assistant'
}]



describe('getEmployerRole', () => {
  it('returns the employee\'s role in the company', () => {
    expect(getEmployerRole("Javid", employees)).toBe('Human Resources Assistant');
    expect(getEmployerRole("Satti", employees)).toBe("Developer")

  });
});



