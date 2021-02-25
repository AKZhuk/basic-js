const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(Direct = true) {
    this.Direct = Direct;
  }
  encrypt(message, key) {
    return this.encryptMachine(message, key, false);
  }
  decrypt(message, key) {
    return this.encryptMachine(message, key, false);
  }

  encryptMachine(message, key, mode) {
    if (message === undefined || key == undefined) {
      throw new Error("Param undefined");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    return message;
  }
}

module.exports = VigenereCipheringMachine;
