import Sport from "./Sport";
import CyclingIcon from "../static/2biking_icon.png";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils";

const CyclingSport: Sport = {
  name: "Ciclismo",
  units: "km/h",
  rythmPlaceholder: "37.5",
  icon: CyclingIcon,
  showRythm: (distance: number, totalTime: string): string => {
    const seconds = HHMMSSToSeconds(totalTime);
    const speed = distance / (seconds / 3.6);
    const rounded = Math.round(speed * 100) / 100;
    return rounded.toString();
  },

  showTotalTime: (distance: number, rythm: string): string => {
    const seconds = Math.round((3600 * (distance / 1000)) / parseFloat(rythm));
    return secondsToHHMMSS(seconds);
  },
};

export default CyclingSport;
