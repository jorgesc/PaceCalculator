import Sport from "./Sport";
import SwimmingIcon from "../static/2swim_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils";

class SwimmingSport extends Sport {
  public name = "Natación";
  public units = "mm/100m";
  public rythmPlaceholder = "22";
  public icon = SwimmingIcon;
  public showRythm = (distance: number, totalTime: string): string => {
    return "NONE!";
  };

  public showTotalTime = (distance: number, rythm: string): string => {
    return "NONE!";
  };

  public cleanInputRythm = (newValue: string, oldValue: string): string => {
    return "";
  };
}

export default new SwimmingSport();
