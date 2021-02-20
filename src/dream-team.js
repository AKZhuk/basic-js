const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameDreamTeam = "";
  if (Array.isArray(members) == true) {
    members = members.map((name) =>
      typeof name === "string" ? name.trim() : ""
    );
    members.sort().forEach((name) => {
      if (typeof name === "string") {
        nameDreamTeam = nameDreamTeam + name.substr(0, 1).toUpperCase();
      }
    });
  } else {
    nameDreamTeam = false;
  }
  return nameDreamTeam;
};
