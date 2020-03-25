const greet = require('./index');

test('converts name to "Hello, name."', () => {
  expect(greet("Bob")).toBe("Hello, Bob.");
});

test('stand-in for null name value', () => {
    expect(greet(null)).toBe("Hello, my friend.");
});

test('upper case shouting', () => {
    expect(greet("BOB")).toBe("HELLO BOB!");
});

test('test array of two names', () => {
    expect(greet(["Jill","Jane"])).toBe("Hello, Jill and Jane.");
});

test('test array of more than two names', () => {
    expect(greet(["Amy","Brian","Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});