import Sport from "../models/Sport";

import RunningSport from "../models/RunningSport";
import CyclingSport from "../models/CyclingSport";

export interface IAppState {
  sports: Sport[];
  selectedSport: number;
  distanceFieldValue: string;
  timeFieldValue: string;
  rythmFieldValue: string;
}

const initialState: IAppState = {
  selectedSport: 0,
  sports: [RunningSport, CyclingSport],
  distanceFieldValue: "",
  timeFieldValue: "",
  rythmFieldValue: "",
};

export default initialState;
