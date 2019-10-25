import {secondsToHHMMSS, calculateLapTimes} from "../utils";

describe("Utils test", () => {
  it("Rounding errors", () => {
    expect(secondsToHHMMSS(239.99999999999997)).toEqual("00:04:00");
  });
});

describe("calculateLapTimes", () => {
  it("Simple case", () => {
    const expected = [
      {label: "km 1", time: "00:01:00"},
      {label: "km 2", time: "00:02:00"},
      {label: "km 3", time: "00:03:00"},
      {label: "km 4", time: "00:04:00"},
      {label: "km 5", time: "00:05:00"},
      {label: "km 6", time: "00:06:00"},
    ];

    expect(calculateLapTimes(6000, 6 * 60)).toEqual(expected);
  });
});
