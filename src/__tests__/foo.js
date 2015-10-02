jest.dontMock('modules/sum');
jest.dontMock('apps/foo/bar');

describe('sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    var foo = require('apps/foo/bar');
    expect(foo).toBe(19);
  });
});