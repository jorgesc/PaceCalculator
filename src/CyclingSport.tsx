import Sport from "./Sport";

import {HHMMSSToSeconds, secondsToHHMMSS} from "./utils";

const CyclingSport: Sport = {
  name: "Ciclismo",
  units: "km/h",
  showRythm: (distance: number, totalTime: string): string => {
    const seconds = HHMMSSToSeconds(totalTime);
    return (distance / (seconds / 3.6)).toString();
  },

  showTotalTime: (distance: number, rythm: string): string => {
    const seconds = Math.round((3600 * (distance / 1000)) / parseFloat(rythm));
    return secondsToHHMMSS(seconds);
  },
};

export default CyclingSport;
