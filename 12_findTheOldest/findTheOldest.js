const findTheOldest = function (array) {
  return array.sort((a, b) => {
    const lastAge =
      (!a.yearOfDeath ? new Date().getFullYear() : a.yearOfDeath) -
      a.yearOfBirth;
    const nextAge =
      (!b.yearOfDeath ? new Date().getFullYear() : b.yearOfDeath) -
      b.yearOfBirth;
    return nextAge - lastAge;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
