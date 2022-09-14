import reverseString from "../code/reverseString";

test('"test" should become "tset"', () => {
    expect(reverseString('test')).toBe('tset');
});

test('"Cem" should become "meC"', () => {
    expect(reverseString('Cem')).toBe('meC');
});

test('"12345" should become "54321"', () => {
    expect(reverseString('12345')).toBe('54321');
});

test('12345 should become "You must provide valid string."', () => {
    expect(reverseString(12345)).toBe('You must provide valid string.')
})