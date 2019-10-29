import Sport from "./Sport";
import CyclingIcon from "../static/2biking_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils/formattingUtils";

class CyclingSport extends Sport {
  public name = "Cycling";
  public units = "km/h";
  public rythmPlaceholder = "37.5";
  public icon = CyclingIcon;

  public cleanInputRythm = (newValue: string, oldValue: string): string => {
    return /^\d*(\.\d{0,2})?$/.test(newValue) ? newValue : oldValue;
  };

  protected rythmToMetersPerSecond = (rythm: string): number => {
    return parseFloat(rythm) / 3.6;
  };

  protected metersPerSecondToRythm = (mps: number): string => {
    return (Math.round(mps * 3.6 * 100) / 100).toString();
  };
}

export default new CyclingSport();
