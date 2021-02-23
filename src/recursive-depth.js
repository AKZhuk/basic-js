const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let curDepth = 0;
    let maxDepth = 0;

    if (Array.isArray(arr)) {
      maxDepth = curDepth = 1;
      for (let i = 0; i < arr.length; i++) {
        curDepth += this.calculateDepth(arr[i]);
        curDepth > maxDepth ? (maxDepth = curDepth) : curDepth;
        curDepth = 1;
      }
    }
    return maxDepth;
  }
};
