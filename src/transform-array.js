const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case `--discard-next`:
        if (i < arr.length) {
          i++;
        }
        break;
      case `--discard-prev`:
        result.pop();
        break;
      case `--double-next`:
        if (i < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case `--double-prev`:
        result.push[arr[i - 1]];
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }
  return result;
};
