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
    const {
      distanceFieldValue,
      timeFieldValue,
      selectedSport,
      sports,
    } = getState().app;
    const distance = parseInt(distanceFieldValue, 10);
    const newTime = sports[selectedSport].cleanInputTime(s, timeFieldValue);
    const newRythm = sports[selectedSport].calculateRythmFromTotalTime(distance, newTime);
    dispatch(updateInputFieldTime(newTime));
    dispatch(updateInputFieldRythm(newRythm));
  };
};

export const rythmInputFieldChanged = (
  s: string,
): ThunkAction<void, IState, undefined, AppActionTypes> => {
  return (
    dispatch: ThunkDispatch<IState, undefined, AppActionTypes>,
    getState: () => IState,
  ): void => {
    const {
      distanceFieldValue,
      rythmFieldValue,
      sports,
      selectedSport,
    } = getState().app;
    const distance = parseInt(distanceFieldValue, 10);
    const newRythm = sports[selectedSport].cleanInputRythm(s, rythmFieldValue);
    const newTime = sports[selectedSport].calculateTotalTimeFromRythm(distance, newRythm);
    dispatch(updateInputFieldRythm(newRythm));
    dispatch(updateInputFieldTime(newTime));
  };
};

export type AppActionTypes =
  | IChangeSelectedSportAction
  | IUpdateInputFieldDistance
  | IUpdateInputFieldTime
  | IUpdateInputFieldRythm;
