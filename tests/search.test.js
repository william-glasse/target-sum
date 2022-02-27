const search = require('../src/search');

describe('Name of the group', () => {
  test('should ', () => {
    expect(search([1, 2, 3, 4, 6], 6)).toEqual([1, 3]);
  });
  test('should ', () => {
    expect(search([2, 5, 9, 11], 11)).toEqual([0, 2]);
  });
  test('should ', () => {
    expect(search([3, 5, 9, 11], 11)).toEqual(null);
  });
});
