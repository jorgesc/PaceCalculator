import Sport from "./Sport";
import CyclingIcon from "../static/2biking_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils";

class CyclingSport extends Sport {
  public name = "Ciclismo";
  public units = "km/h";
  public rythmPlaceholder = "37.5";
  public icon = CyclingIcon;

  public showRythm = (distance: number, totalTime: string): string => {
    const seconds = HHMMSSToSeconds(totalTime);
    const speed = distance / (seconds / 3.6);
    const rounded = Math.round(speed * 100) / 100;
    return rounded.toString();
  };

  public showTotalTime = (distance: number, rythm: string): string => {
    const seconds = Math.round((3600 * (distance / 1000)) / parseFloat(rythm));
    return secondsToHHMMSS(seconds);
  };

  public cleanInputRythm = (newValue: string, oldValue: string): string => {
    return /^\d*(\.\d{0,2})?$/.test(newValue) ? newValue : oldValue;
  };
}

export default new CyclingSport();
