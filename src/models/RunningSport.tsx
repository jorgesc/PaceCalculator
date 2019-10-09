import Sport from "./Sport";
import RunningIcon from "../static/2running_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils";

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
    if (!pattern.test(newValue)) return oldValue;
    if (
      /^\d{2}$/.test(newValue.slice(-2)) &&
      newValue.length > oldValue.length &&
      (newValue.match(/:/g) || []).length < 1
    ) {
      return newValue + ":";
    }
    return newValue;
  };
}

export default new RunningSport();
