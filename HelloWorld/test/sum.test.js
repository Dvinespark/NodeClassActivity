const sum = require('../test/sum');

const expected_result = 5;

test('2 + 3 adds to result 5', () => {
    expect(sum(2,3)).toBe(5);
});