import RunningSport from "../RunningSport";
import CyclingSport from "../CyclingSport";

describe("Running", () => {
  it("Calculates rythm correctly", () => {
    const distances = [10000, 5000, 20000, 100, 10000];
    const times = ["02:46:40", "02:46:40", "02:46:40", "2", "48:00"];
    const rythms = ["16:40", "33:20", "08:20", "00:20", "04:48"];

    for (let i = 0; i < distances.length; i++) {
      expect(RunningSport.showRythm(distances[i], times[i])).toEqual(rythms[i]);
    }
  });

  it("Calculates totalTime correctly", () => {
    const distances = [10000, 5000, 20000, 100, 10000];
    const times = ["02:46:40", "02:46:40", "02:46:40", "00:00:02", "00:48:00"];
    const rythms = ["16:40", "33:20", "08:20", "00:20", "04:48"];

    for (let i = 0; i < distances.length; i++) {
      expect(RunningSport.showTotalTime(distances[i], rythms[i])).toEqual(
        times[i],
      );
    }
  });

  it("Cleans rythm input correctly", () => {
    let newValue = "1";
    let oldValue = "";
    let result = "1";
    expect(RunningSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "81:4";
    oldValue = "8";
    result = "81:4";
    expect(RunningSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "11";
    oldValue = "1";
    result = "11:";
    expect(RunningSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "02";
    oldValue = "0";
    result = "02:";
    expect(RunningSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "11:25";
    oldValue = "11:2";
    result = "11:25";
    expect(RunningSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "11";
    oldValue = "11:";
    result = "11";
    expect(RunningSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "11:25:44";
    oldValue = "11:25";
    result = "11:25";
    expect(RunningSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "11:2a";
    oldValue = "11:2";
    result = "11:2";
    expect(RunningSport.cleanInputRythm(newValue, oldValue)).toEqual(result);
  });
});

describe("Cycling", () => {
  it("Calculates rythm correctly", () => {
    const distances = [10000, 5000, 20000, 100, 10000];
    const times = ["02:46:40", "02:46:40", "02:46:40", "2", "48:00"];
    const rythms = ["3.6", "1.8", "7.2", "180", "12.5"];

    for (let i = 0; i < distances.length; i++) {
      expect(CyclingSport.showRythm(distances[i], times[i])).toEqual(rythms[i]);
    }
  });

  it("Calculates totalTime correctlly", () => {
    const distances = [10000, 5000, 20000, 100, 10000];
    const times = ["02:46:40", "02:46:40", "02:46:40", "00:00:02", "00:48:00"];
    const rythms = ["3.6", "1.8", "7.2", "180", "12.5"];

    for (let i = 0; i < distances.length; i++) {
      expect(CyclingSport.showTotalTime(distances[i], rythms[i])).toEqual(
        times[i],
      );
    }
  });

  it("Cleans rythm input correctly", () => {
    let newValue = "1";
    let oldValue = "";
    let result = "1";
    expect(CyclingSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "81.4";
    oldValue = "81.";
    result = "81.4";
    expect(CyclingSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "11:";
    oldValue = "11";
    result = "11";
    expect(CyclingSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "403";
    oldValue = "40";
    result = "403";
    expect(CyclingSport.cleanInputRythm(newValue, oldValue)).toEqual(result);

    newValue = "112a";
    oldValue = "112";
    result = "112";
    expect(CyclingSport.cleanInputRythm(newValue, oldValue)).toEqual(result);
  });
});
