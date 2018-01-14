import uniqueRandomArray from "unique-random-array";
const madMaxFuryRoadNames = require("./madmaxfuryroad-names.json");

const mainExport = {
  all: madMaxFuryRoadNames,
  random: uniqueRandomArray(madMaxFuryRoadNames)
};

export default mainExport;
module.exports = mainExport; // for CommonJS compatibility
