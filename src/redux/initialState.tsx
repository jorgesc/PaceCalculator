import Sport from "../models/Sport";

import RunningSport from "../models/RunningSport";
import CyclingSport from "../models/CyclingSport";

import {ILapTimesArray} from "../components/LapTimesDisplay/LapTimesDisplay";

export interface IAppState {
  sports: Sport[];
  selectedSport: number;
  distanceFieldValue: string;
  timeFieldValue: string;
  rythmFieldValue: string;
  lapTimes: ILapTimesArray;
}

const initialState: IAppState = {
  selectedSport: 0,
  sports: [RunningSport, CyclingSport],
  distanceFieldValue: "",
  timeFieldValue: "",
  rythmFieldValue: "",
  lapTimes: null,
};

export default initialState;
