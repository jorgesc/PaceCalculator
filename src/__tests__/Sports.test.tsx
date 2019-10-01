import RunningSport from "../RunningSport";

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
});
