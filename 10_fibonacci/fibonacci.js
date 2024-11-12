const fibonacci = function (position) {
  const fibonacciArray = [0, 1];

  if (position < 0) return "OOPS";

  while (fibonacciArray.length < position + 1) {
    fibonacciArray.push(
      fibonacciArray[fibonacciArray.length - 1] +
        fibonacciArray[fibonacciArray.length - 2]
    );
  }
  return fibonacciArray[position];
};

// Do not edit below this line
module.exports = fibonacci;
