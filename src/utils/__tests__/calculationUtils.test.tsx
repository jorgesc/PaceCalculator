import {calculateLapTimes} from "../calculationUtils";

describe("calculateLapTimes", () => {
  it("Simple case", () => {
    const expected = [
      {label: "km 1", time: "00:01:00", showInCondensedMode: false},
      {label: "km 2", time: "00:02:00", showInCondensedMode: false},
      {label: "km 3", time: "00:03:00", showInCondensedMode: false},
      {label: "km 4", time: "00:04:00", showInCondensedMode: false},
      {label: "km 5", time: "00:05:00", showInCondensedMode: true},
      {label: "km 6", time: "00:06:00", showInCondensedMode: false},
    ];

    expect(calculateLapTimes(6000, 6 * 60)).toEqual(expected);
  });

  it("With custom distances", () => {
    const expected = [
      {label: "km 1", time: "00:01:00", showInCondensedMode: false},
      {label: "km 2", time: "00:02:00", showInCondensedMode: false},
      {label: "Carrera 2.5 km", time: "00:02:30", showInCondensedMode: true},
      {label: "km 3", time: "00:03:00", showInCondensedMode: false},
      {label: "km 4", time: "00:04:00", showInCondensedMode: false},
      {label: "km 5", time: "00:05:00", showInCondensedMode: true},
      {label: "Carrera 5.5 km", time: "00:05:30", showInCondensedMode: true},
      {label: "km 6", time: "00:06:00", showInCondensedMode: false},
    ];

    expect(
      calculateLapTimes(6000, 6 * 60, [
        {label: "Carrera 2.5 km", distance: "2500"},
        {label: "Carrera 5.5 km", distance: "5500"},
      ]),
    ).toEqual(expected);
  });
});
