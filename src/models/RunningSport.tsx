import Sport from "./Sport";
import RunningIcon from "../static/2running_icon.png";

import {
  HHMMSSToSeconds,
  secondsToHHMMSS,
  addColonAfterTwoNumbers,
  addColonBetweenThreeNumbers,
} from "../utils/formattingUtils";

class RunningSport extends Sport {
  public name = "Running";
  public units = "mm:ss/km";
  public rythmPlaceholder = "04:57";
  public icon = RunningIcon;

  public cleanInputRythm = (newValue: string, oldValue: string): string => {
    const pattern = /^\d?(\d(:([0-5](\d?)?)?)?)?$/;
    let output = newValue;
    output = addColonBetweenThreeNumbers(output);
    output = addColonAfterTwoNumbers(output, oldValue, 1);
    return pattern.test(output) ? output : oldValue;
  };

  protected rythmToMetersPerSecond = (rythm: string): number => {
    return 1000 / HHMMSSToSeconds(rythm, false);
  };

  protected metersPerSecondToRythm = (mps: number): string => {
    return secondsToHHMMSS(1000 / mps, false);
  };
}

export default new RunningSport();
