const palindromes = function (string) {
  const regex = /[^(A-Za-z0-9)]/g;
  const cleanString = string
    .replace(regex, "")
    .toLowerCase();
  const reversedString = cleanString
    .split("")
    .reverse()
    .join("");

  return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
