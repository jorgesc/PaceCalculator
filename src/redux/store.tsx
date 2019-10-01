import {createStore} from "redux";

import Sport from "../Sport";

interface IAppState {
  sports: Sport[];
  selectedSport: Sport;
}

const appState: IAppState = {
  selectedSport: null,
  sports: [],
};
const guiState = {};

const initialState = {
  app: appState,
  gui: guiState,
};
