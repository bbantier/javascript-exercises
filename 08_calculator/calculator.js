const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (array) {
  return array.reduce((prev, curr) => prev * curr);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
