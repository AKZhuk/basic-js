const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  return sampleActivity == undefined || sampleActivity !== Number
    ? false
    : Math.ceil(
        ((sampleActivity / MODERN_ACTIVITY) * 0.693) / HALF_LIFE_PERIOD
      );
};
