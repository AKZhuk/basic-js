const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = "";

  date instanceof Date;
  if (!date) {
    season = "Unable to determine the time of year!";
    return season;
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("error");
  } else {
    switch (date.getMonth()) {
      case 1:
      case 0:
      case 11:
        season = "winter";
        break;

      case 2:
      case 3:
      case 4:
        season = "spring";
        break;

      case 5:
      case 6:
      case 7:
        season = "summer";
        break;

      case 9:
      case 10:
      case 8:
        season = "autumn";
        break;
    }
    return season;
  }
};
