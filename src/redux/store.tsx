import {createStore} from "redux";

import Sport from "../Sport";

import RunningSport from "../RunningSport";
import CyclingSport from "../CyclingSport";

interface IAppState {
  sports: Sport[];
  selectedSport: Sport;
}

const appState: IAppState = {
  selectedSport: RunningSport,
  sports: [RunningSport, CyclingSport],
};
const guiState = {};

const initialState = {
  app: appState,
  gui: guiState,
};
