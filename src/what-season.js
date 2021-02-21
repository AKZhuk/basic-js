const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = "";
  if (date == null) {
    season = "Unable to determine the time of year!";
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
  }
  return season;
};
