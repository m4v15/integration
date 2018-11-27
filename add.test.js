const test = require('tape');
const add = require('./add.js');

test('Testing Tape is working', function (t) {
  const actual = 2;
  const expected = 2;
  t.equal(actual, expected, '2 should equal 2 ');
  t.end();
});

test('Testing Tape is working', function (t) {
  const actual = add(1, 5);
  const expected = 6;
  t.equal(actual, expected, 'inputs 1,5 should return 6');
  t.end();
});