import {AppActionTypes} from "./actionCreators";
import {
  CHANGE_SELECTED_SPORT,
  UPDATE_INPUT_FIELD_DISTANCE,
  UPDATE_INPUT_FIELD_TIME,
  UPDATE_INPUT_FIELD_RYTHM,
  UPDATE_LAP_TIMES,
} from "./actionCreators";

import initialState, {IStateAppReducer} from "./initialState";

export const appReducer = (
  state: IStateAppReducer = initialState.app,
  action: AppActionTypes,
) => {
  switch (action.type) {
    case CHANGE_SELECTED_SPORT:
      return {...state, selectedSport: action.payload};

    case UPDATE_INPUT_FIELD_DISTANCE:
      return {...state, distanceFieldValue: action.payload.replace(/\D/g, "")};

    case UPDATE_INPUT_FIELD_TIME:
      return {...state, timeFieldValue: action.payload};

    case UPDATE_INPUT_FIELD_RYTHM:
      return {...state, rythmFieldValue: action.payload};

    case UPDATE_LAP_TIMES:
      return {...state, lapTimes: action.payload};
  }

  return state;
};

export default appReducer;
