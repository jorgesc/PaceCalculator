import {secondsToHHMMSS} from "../formattingUtils";

describe("Utils test", () => {
  it("Rounding errors", () => {
    expect(secondsToHHMMSS(239.99999999999997)).toEqual("00:04:00");
  });
});
