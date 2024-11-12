const removeFromArray = function (array, ...values) {
  const newArray = [];
  array.forEach((el) => {
    if (!values.includes(el)) {
      newArray.push(el);
    }
  })
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
