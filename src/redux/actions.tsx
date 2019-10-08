import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IState} from "./store";

const CHANGE_SELECTED_SPORT = "CHANGE_SELECTED_SPORT";
const UPDATE_INPUT_FIELD_DISTANCE = "UPDATE_INPUT_FIELD_DISTANCE";
const UPDATE_INPUT_FIELD_TIME = "UPDATE_INPUT_FIELD_TIME";
const UPDATE_INPUT_FIELD_RYTHM = "UPDATE_INPUT_FIELD_RYTHM";

interface IChangeSelectedSportAction {
  type: typeof CHANGE_SELECTED_SPORT;
  payload: number;
}

interface IUpdateInputFieldDistance {
  type: typeof UPDATE_INPUT_FIELD_DISTANCE;
  payload: string;
}

interface IUpdateInputFieldTime {
  type: typeof UPDATE_INPUT_FIELD_TIME;
  payload: string;
}

interface IUpdateInputFieldRythm {
  type: typeof UPDATE_INPUT_FIELD_RYTHM;
  payload: string;
}

export const changeSelectedSportAction = (
  selection: number,
): IChangeSelectedSportAction => {
  return {type: CHANGE_SELECTED_SPORT, payload: selection};
};

export const updateInputFieldDistance = (
  s: string,
): IUpdateInputFieldDistance => {
  return {type: UPDATE_INPUT_FIELD_DISTANCE, payload: s};
};

export const updateInputFieldTime = (s: string): IUpdateInputFieldTime => {
  return {type: UPDATE_INPUT_FIELD_TIME, payload: s};
};

export const updateInputFieldRythm = (s: string): IUpdateInputFieldRythm => {
  return {type: UPDATE_INPUT_FIELD_RYTHM, payload: s};
};

export const timeInputFieldChanged = (
  s: string,
): ThunkAction<void, IState, undefined, AppActionTypes> => {
  return (
    dispatch: ThunkDispatch<IState, undefined, AppActionTypes>,
    getState: () => IState,
  ): void => {
    const state = getState();
    const distance = parseInt(state.app.distanceFieldValue, 10);
    const currSport = state.app.sports[state.app.selectedSport];
    dispatch(updateInputFieldTime(s));
    dispatch(updateInputFieldRythm(currSport.showRythm(distance, s)));
  };
};

export const rythmInputFieldChanged = (
  s: string,
): ThunkAction<void, IState, undefined, AppActionTypes> => {
  return (
    dispatch: ThunkDispatch<IState, undefined, AppActionTypes>,
    getState: () => IState,
  ): void => {
    const state = getState();
    const distance = parseInt(state.app.distanceFieldValue, 10);
    const currSport = state.app.sports[state.app.selectedSport];
    dispatch(updateInputFieldRythm(s));
    dispatch(updateInputFieldTime(currSport.showTotalTime(distance, s)));
  };
};

export type AppActionTypes =
  | IChangeSelectedSportAction
  | IUpdateInputFieldDistance
  | IUpdateInputFieldTime
  | IUpdateInputFieldRythm;
