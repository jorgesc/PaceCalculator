import Sport from "./Sport";
import SwimmingIcon from "../static/2swim_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils";

class SwimmingSport extends Sport {
  public name = "Natación";
  public units = "mm/100m";
  public rythmPlaceholder = "22";
  public icon = SwimmingIcon;

  public cleanInputRythm = (newValue: string, oldValue: string): string => {
    return "";
  };

  protected rythmToMetersPerSecond = (rythm: string): number => 0;
  protected metersPerSecondToRythm = (mps: number): string => "";
}

export default new SwimmingSport();
