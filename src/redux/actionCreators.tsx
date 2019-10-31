import {ILapTimesArray} from "../components/LapTimesDisplay";

export const CHANGE_SELECTED_SPORT = "CHANGE_SELECTED_SPORT";
export const UPDATE_INPUT_FIELD_DISTANCE = "UPDATE_INPUT_FIELD_DISTANCE";
export const UPDATE_INPUT_FIELD_TIME = "UPDATE_INPUT_FIELD_TIME";
export const UPDATE_INPUT_FIELD_RYTHM = "UPDATE_INPUT_FIELD_RYTHM";
export const UPDATE_LAP_TIMES = "UPDATE_LAP_TIMES";
export const UPDATE_CONDENSED_CHECKBOX_CHECKED =
  "UPDATE_CONDENSED_CHECKBOX_CHECKED";

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

interface IUpdateLapTimes {
  type: typeof UPDATE_LAP_TIMES;
  payload: ILapTimesArray;
}

interface IUpdateCondensedCheckboxChecked {
  type: typeof UPDATE_CONDENSED_CHECKBOX_CHECKED;
  payload: boolean;
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

export const updateLapTimes = (lapTimes: ILapTimesArray): IUpdateLapTimes => {
  return {type: UPDATE_LAP_TIMES, payload: lapTimes};
};

export const updateCondensedCheckboxChecked = (
  checked: boolean,
): IUpdateCondensedCheckboxChecked => {
  return {type: UPDATE_CONDENSED_CHECKBOX_CHECKED, payload: checked};
};

export type AppActionTypes =
  | IChangeSelectedSportAction
  | IUpdateInputFieldDistance
  | IUpdateInputFieldTime
  | IUpdateInputFieldRythm
  | IUpdateLapTimes
  | IUpdateCondensedCheckboxChecked;
