import Sport from "./Sport";
import RunningIcon from "../static/2running_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils";
import {addColonAfterTwoNumbers, addColonBetweenThreeNumbers} from "../utils";

class RunningSport extends Sport {
  public name = "Atletismo";
  public units = "mm:ss";
  public rythmPlaceholder = "04:57";
  public icon = RunningIcon;

  public showRythm = (distance: number, totalTime: string): string => {
    const seconds = HHMMSSToSeconds(totalTime) / (distance / 1000);
    return secondsToHHMMSS(seconds, false);
  };

  public showTotalTime = (distance: number, rythm: string): string => {
    const secondsPerKm = HHMMSSToSeconds(rythm);
    return secondsToHHMMSS(secondsPerKm * (distance / 1000));
  };

  public cleanInputRythm = (newValue: string, oldValue: string): string => {
    const pattern = /^\d?(\d(:([0-5](\d?)?)?)?)?$/;
    let output = newValue;
    output = addColonBetweenThreeNumbers(output);
    output = addColonAfterTwoNumbers(output, oldValue, 1);
    return pattern.test(output) ? output : oldValue;
  };
}

export default new RunningSport();
