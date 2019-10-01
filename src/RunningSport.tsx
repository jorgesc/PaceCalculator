import Sport from "./Sport";

import {HHMMSSToSeconds, secondsToHHMMSS} from "./utils";

const RunningSport: Sport = {
  name: "Atletismo",
  units: "mm:ss",
  showRythm: (distance: number, totalTime: string): string => {
    const seconds = HHMMSSToSeconds(totalTime) / (distance / 1000);
    return secondsToHHMMSS(seconds, false);
  },

  showTotalTime: (distance: number, rythm: string): string => {
    const secondsPerKm = HHMMSSToSeconds(rythm);
    return secondsToHHMMSS(secondsPerKm * (distance / 1000));
  },
};

export default RunningSport;
