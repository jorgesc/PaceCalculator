import Sport from "./Sport";
import SwimmingIcon from "../static/2swim_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils";

const SwimmingSport: Sport = {
  name: "Natación",
  units: "mm/100m",
  rythmPlaceholder: "22",
  icon: SwimmingIcon,
  showRythm: (distance: number, totalTime: string): string => {
    return "NONE!";
  },

  showTotalTime: (distance: number, rythm: string): string => {
    return "NONE!";
  },
};

export default SwimmingSport;
