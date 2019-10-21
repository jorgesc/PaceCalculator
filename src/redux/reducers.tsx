import {AppActionTypes} from "./actionCreators";

import {initialStateApp, IAppState} from "./initialState";

export const appReducer = (
  state: IAppState = initialStateApp,
  action: AppActionTypes,
) => {
  switch (action.type) {
    case "CHANGE_SELECTED_SPORT":
      return {...state, selectedSport: action.payload};

    case "UPDATE_INPUT_FIELD_DISTANCE":
      return {...state, distanceFieldValue: action.payload.replace(/\D/g, "")};

    case "UPDATE_INPUT_FIELD_TIME":
      return {...state, timeFieldValue: action.payload};

    case "UPDATE_INPUT_FIELD_RYTHM":
      return {...state, rythmFieldValue: action.payload};
  }

  return state;
};

export default appReducer;
