import {timeInputFieldCleaner} from "../utils";

describe("distanceInputFieldCleaner", () => {
  it("works", () => {
    let newValue = "11:25:2";
    let oldValue = "11:25:";
    let result = "11:25:2";
    expect(timeInputFieldCleaner(newValue, oldValue)).toEqual(result);

    newValue = "11:25:8";
    oldValue = "11:24:";
    result = "11:24:";
    expect(timeInputFieldCleaner(newValue, oldValue)).toEqual(result);

    newValue = "11";
    oldValue = "1";
    result = "11:";
    expect(timeInputFieldCleaner(newValue, oldValue)).toEqual(result);

    newValue = "11:25";
    oldValue = "11:2";
    result = "11:25:";
    expect(timeInputFieldCleaner(newValue, oldValue)).toEqual(result);

    newValue = "11:25";
    oldValue = "11:25:";
    result = "11:25";
    expect(timeInputFieldCleaner(newValue, oldValue)).toEqual(result);

    newValue = "11:25:44";
    oldValue = "11:25:4";
    result = "11:25:44";
    expect(timeInputFieldCleaner(newValue, oldValue)).toEqual(result);
  });
});
