const { expect } = require("chai");
const { formatTime } = require("../src/utils/utils");

describe("formatTime", () => {
  it("returns an empty string when given an empty string", () => {
    const str = "";
    const expected = "";
    expect(formatTime(str)).to.equal(expected);
  });
  it("returns a modified timestamp string when given a timestamp", () => {
    const str = "2018-05-30T15:59:13.341Z";
    const expected = "2018-05-30";
    expect(formatTime(str)).to.equal(expected);
  });
  it("does not mutate the original str", () => {
    const str = "2018-05-30T15:59:13.341Z";
    formatTime(str);
    expect(str).to.equal(str);
  });
});
