const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .filter((name) => typeof name === "string")
        .map((name) => name.trim().substr(0, 1).toUpperCase())
        .sort()
        .join("")
    : false;
};
