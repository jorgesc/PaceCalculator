import {
  addColonAfterTwoNumbers,
  addColonBetweenThreeNumbers,
  HHMMSSToSeconds,
  secondsToHHMMSS,
} from "../utils";

const speedIsValid = (s: number): boolean => {
  return s !== 0 && isFinite(s);
};

export default abstract class Sport {
  public abstract name: string;
  public abstract units: string;
  public abstract rythmPlaceholder: string;
  public abstract icon: string;
  public abstract cleanInputRythm: (newVal: string, oldVal: string) => string;
  protected abstract metersPerSecondToRythm: (mps: number) => string;
  protected abstract rythmToMetersPerSecond: (rythm: string) => number;

  public cleanInputTime = (newValue: string, oldValue: string): string => {
    const pattern = /^\d?(\d(:([0-5](\d(:([0-5](\d)?)?)?)?)?)?)?$/;
    let output = newValue;
    output = addColonBetweenThreeNumbers(output);
    output = addColonAfterTwoNumbers(output, oldValue);
    return pattern.test(output) ? output : oldValue;
  };

  public calculateTotalTimeFromRythm = (
    distance: number,
    rythm: string,
  ): string => {
    const speed = this.rythmToMetersPerSecond(rythm);
    return speedIsValid(speed) ? secondsToHHMMSS(distance / speed) : "";
  };

  public calculateRythmFromTotalTime = (
    distance: number,
    totalTime: string,
  ): string => {
    const totalTimeSeconds = HHMMSSToSeconds(totalTime);
    const speed = distance / totalTimeSeconds;
    return speedIsValid(speed) ? this.metersPerSecondToRythm(speed) : "";
  };
}
