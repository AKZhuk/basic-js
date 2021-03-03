const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";

  str = String(str);

  options.Addition = String(options.Addition);

  if (
    options.repeatTimes == undefined &&
    options.additionRepeatTimes == undefined
  ) {
    {
      result = result + str + options.addition;
    }
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      result = result + str;
      addAddition(options);
      i != options.repeatTimes - 1 ? addSeparator(options) : result;
    }
  }

  function addSeparator(options) {
    options.separator == null
      ? (result = result + "+")
      : (result = result + options.separator);
  }

  function addAddition(options) {
    for (let n = 0; n < options.additionRepeatTimes; n++) {
      options.addition == null
        ? (result = result + "null")
        : (result = result + options.addition);
      n != options.additionRepeatTimes - 1
        ? addAdditionSeparator(options)
        : result;
    }
  }
  function addAdditionSeparator(options) {
    result = result + options.additionSeparator;
  }
  return result;
};
