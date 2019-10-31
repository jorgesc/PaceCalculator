import Sport from "../models/Sport";

import RunningSport from "../models/RunningSport";
import CyclingSport from "../models/CyclingSport";
import SwimmingSport from "../models/SwimmingSport";

import {ILapTimesArray} from "../components/LapTimesDisplay";

export interface IStateAppReducer {
  sports: Sport[];
  selectedSport: number;
  distanceFieldValue: string;
  timeFieldValue: string;
  rythmFieldValue: string;
  lapTimes: ILapTimesArray;
  condensedCheckboxChecked: boolean;
}

export interface IState {
  app: IStateAppReducer;
}

const initialStateApp: IStateAppReducer = {
  selectedSport: 0,
  sports: [RunningSport, CyclingSport, SwimmingSport],
  distanceFieldValue: "",
  timeFieldValue: "",
  rythmFieldValue: "",
  lapTimes: null,
  condensedCheckboxChecked: false,
};

export default {
  app: initialStateApp,
};
