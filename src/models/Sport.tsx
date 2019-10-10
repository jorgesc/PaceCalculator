import {addColonAfterTwoNumbers, addColonBetweenThreeNumbers} from "../utils";

export default abstract class Sport {
  public abstract name: string;
  public abstract units: string;
  public abstract rythmPlaceholder: string;
  public abstract icon: string;
  public abstract showRythm: (distance: number, totalTime: string) => string;
  public abstract showTotalTime: (distance: number, rythm: string) => string;
  public abstract cleanInputRythm: (
    newValue: string,
    oldValue: string,
  ) => string;

  public cleanInputTime = (newValue: string, oldValue: string): string => {
    const pattern = /^\d?(\d(:([0-5](\d(:([0-5](\d)?)?)?)?)?)?)?$/;
    let output = newValue;
    output = addColonBetweenThreeNumbers(output);
    output = addColonAfterTwoNumbers(output, oldValue);
    return pattern.test(output) ? output : oldValue;
  };
}
