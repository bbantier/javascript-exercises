const sumAll = function (startNumber, endNumber) {
  let sum = 0;
  const smallerNumber = Math.min(startNumber, endNumber);
  const largerNumber = Math.max(startNumber, endNumber);

  if (
    startNumber < 0 ||
    endNumber < 0 ||
    !Number.isInteger(startNumber) ||
    !Number.isInteger(endNumber)
  ) {
    return "ERROR";
  }

  for (let i = smallerNumber; i <= largerNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
