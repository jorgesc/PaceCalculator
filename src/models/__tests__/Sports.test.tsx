import Sport from "../Sport";
import RunningSport from "../RunningSport";
import CyclingSport from "../CyclingSport";

describe("Sport", () => {
  it("cleanInputTime works as expected", () => {
    class MyTestClass extends Sport {
      public name = "";
      public units = "";
      public icon = "";
      public rythmPlaceholder = "";
      public showTotalTime = (distance: number, rythm: string): string => "";
      public showRythm = (distance: number, totalTime: string): string => "";
      public cleanInputRythm = (newVal: string, oldVal: string): string => "";
    }

    const myTestClass = new MyTestClass();

    expect(myTestClass.cleanInputTime("11:25:2", "11:25:")).toEqual("11:25:2");
    expect(myTestClass.cleanInputTime("11:25:8", "11:25:")).toEqual("11:25:");
    expect(myTestClass.cleanInputTime("11", "1")).toEqual("11:");
    expect(myTestClass.cleanInputTime("11:25", "11:2")).toEqual("11:25:");
    expect(myTestClass.cleanInputTime("11:25", "11:25:")).toEqual("11:25");
    expect(myTestClass.cleanInputTime("11:25:44", "11:25:4")).toEqual(
      "11:25:44",
    );
    expect(myTestClass.cleanInputTime("11:25:4t", "11:25:4")).toEqual(
      "11:25:4",
    );
  });
});

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
    expect(RunningSport.cleanInputRythm("1", "")).toEqual("1");
    expect(RunningSport.cleanInputRythm("81:4", "81:")).toEqual("81:4");
    expect(RunningSport.cleanInputRythm("11", "1")).toEqual("11:");
    expect(RunningSport.cleanInputRythm("02", "0")).toEqual("02:");
    expect(RunningSport.cleanInputRythm("11:25", "11:2")).toEqual("11:25");
    expect(RunningSport.cleanInputRythm("11", "11:")).toEqual("11");
    expect(RunningSport.cleanInputRythm("11:25:44", "11:25")).toEqual("11:25");
    expect(RunningSport.cleanInputRythm("11:2a", "11:2")).toEqual("11:2");
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
    expect(CyclingSport.cleanInputRythm("1", "")).toEqual("1");
    expect(CyclingSport.cleanInputRythm("81.4", "81.")).toEqual("81.4");
    expect(CyclingSport.cleanInputRythm("11:", "11")).toEqual("11");
    expect(CyclingSport.cleanInputRythm("403", "40")).toEqual("403");
    expect(CyclingSport.cleanInputRythm("112a", "112")).toEqual("112");
  });
});
