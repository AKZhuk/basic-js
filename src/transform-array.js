const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case `--discard-next`:
        i + 1 < arr.length ? i++ : i;
        break;
      case `--discard-prev`:
        arr[i - 2] !== "--discard-next" ? result.pop() : i;
        break;
      case `--double-next`:
        i + 1 < arr.length ? result.push(arr[i + 1]) : i;
        break;
      case `--double-prev`:
        if (i !== 0) {
          arr[i - 2] !== "--discard-next" ? result.push(arr[i - 1]) : i;
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }
  return result;
};
