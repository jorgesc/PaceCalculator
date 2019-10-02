import {IReduxAction} from "./actions";

import Sport from "../Sport";

import RunningSport from "../RunningSport";
import CyclingSport from "../CyclingSport";

export interface IAppState {
  sports: Sport[];
  selectedSport: number;
}

const initialState: IAppState = {
  selectedSport: 0,
  sports: [RunningSport, CyclingSport],
};

export const appReducer = (
  state: IAppState = initialState,
  action: IReduxAction,
) => {
  switch (action.actionType) {
    case "CHANGE_SELECTED_SPORT":
      return {...state, selectedSport: action.payload};
  }

  return state;
};
