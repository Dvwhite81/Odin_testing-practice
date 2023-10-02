const functions = require('./functions');
const capitalize = functions.capitalize;
const reverseString = functions.reverseString;
const calculator = functions.calculator;
const add = calculator.add;
const subtract = calculator.subtract;
const divide = calculator.divide;
const multiply = calculator.multiply;
const caesarCipher = functions.caesarCipher;
const analyzeArray = functions.analyzeArray;

test('capitalizes "hello" to equal "Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverses "hello" to equal "olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('adds 4 + 5 to equal 9', () => {
    expect(add(4, 5)).toBe(9);
});

test('subtracts 12 -8 to equal 4', () => {
    expect(subtract(12, 8)).toBe(4);
});

test('divides 24 / 3 to equal 8', () => {
    expect(divide(24, 3)).toBe(8);
});

test('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
});

test('ciphers "GooDbYe", 8 to equal "XffUsPv"', () => {
    expect(caesarCipher("GooDbYe", 17)).toBe("XffUsPv");
});

test('analyzes [1,8,3,4,2,6] to equal average: 4, min: 1, max: 8, length: 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({"average": 4, "min": 1, "max": 8, "length": 6});
});

//console.log(capitalize("hello"));
//console.log(reverseString("hello"));
//console.log(calculator.add(4, 5));
//console.log(caesarCipher("abcdef", 24));
//console.log(analyzeArray([1,8,3,4,2,6]));
