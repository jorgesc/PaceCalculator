import Sport from "./Sport";
import SwimmingIcon from "../static/2swim_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils/formattingUtils";

class SwimmingSport extends Sport {
  public name = "Swimming";
  public units = "mm:ss/hm";
  public rythmPlaceholder = "01:08";
  public icon = SwimmingIcon;

  public cleanInputRythm = (newValue: string, oldValue: string): string => {
    return "";
  };

  protected rythmToMetersPerSecond = (rythm: string): number =>
    100 / HHMMSSToSeconds(rythm, false);
  protected metersPerSecondToRythm = (mps: number): string =>
    secondsToHHMMSS(100 / mps, false);
}

export default new SwimmingSport();
