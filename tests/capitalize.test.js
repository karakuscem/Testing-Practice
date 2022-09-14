import capitalize from '../code/capitalize';

test('"test" should become "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});

test('"Test" should become "Test"', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('"TEST" should become "TEST"', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('"three word test" should become "Three word test"', () => {
  expect(capitalize('three word test')).toBe('Three word test');
});

test('"12@#abcd@#34" should become "You must provide valid string."', () => {
  expect(capitalize('12@#abcd@#34')).toBe('You must provide valid string.');
});

test('"12@#Abcd@#34" should become "You must provide valid string."', () => {
  expect(capitalize('12@#Abcd@#34')).toBe('You must provide valid string.');
});

test('"1234" should become "You must provide valid string."', () => {
  expect(capitalize('1234')).toBe('You must provide valid string.');
});

test('"@#$" should become "You must provide valid string."', () => {
  expect(capitalize('@#$')).toBe('You must provide valid string.');
});

test('1234 should become "You must provide valid string."', () => {
  expect(capitalize(1234)).toBe('You must provide valid string.');
});