import { expect } from "chai";
import madMaxFuryRoadNames from ".";

describe("madmaxfuryroad-names", () => {
  it("should have a list of all available names", () => {
    expect(madMaxFuryRoadNames.all).to.satisfy(isArrayOfStrings);
  });

  it("should allow me to get a random name from the list", () => {
    expect(madMaxFuryRoadNames.random()).to.satisfy(isIncludedIn(madMaxFuryRoadNames.all));
  });
});

function isArrayOfStrings(array) {
  return array.every(i => typeof i === "string");
}

function isIncludedIn(array) {
  return item => array.includes(item);
}
