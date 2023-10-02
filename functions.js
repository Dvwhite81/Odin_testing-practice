const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

const caesarCipher = (str, shift) => {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};

const codeSet = (code) => (code < 97 ? 65 : 97);
const mod = (n, m) => ((n % m) + m) % m;
const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};


const analyzeArray = (nums) => {
    const average = nums.reduce((a, b) => a + b, 0) / nums.length;
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const length = nums.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}
