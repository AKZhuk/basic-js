const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      matrix[i][n] == "^^" ? (result = result + 1) : result;
    }
  }
  return result;
  // remove line with error and write your code here
};
