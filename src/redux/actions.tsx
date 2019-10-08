const CHANGE_SELECTED_SPORT = "CHANGE_SELECTED_SPORT";
const UPDATE_INPUT_FIELD_DISTANCE = "UPDATE_INPUT_FIELD_DISTANCE";
const UPDATE_INPUT_FIELD_TIME = "UPDATE_INPUT_FIELD_TIME";
const UPDATE_INPUT_FIELD_RYTHM = "UPDATE_INPUT_FIELD_RYTHM";
const TIME_INPUT_FIELD_CHANGED = "TIME_INPUT_FIELD_CHANGED";
const RYTHM_INPUT_FIELD_CHANGED = "TIME_INPUT_FIELD_CHANGED";

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

interface ITimeInputFieldChanged {
  type: typeof TIME_INPUT_FIELD_CHANGED;
  payload: string;
}

interface IRythmInputFieldChanged {
  type: typeof RYTHM_INPUT_FIELD_CHANGED;
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

export const timeInputFieldChanged = (s: string): ITimeInputFieldChanged => {
  return {type: TIME_INPUT_FIELD_CHANGED, payload: s};
};

export const rythmInputFieldChanged = (s: string): IRythmInputFieldChanged => {
  return {type: RYTHM_INPUT_FIELD_CHANGED, payload: s};
};

export type AppActionTypes =
  | IChangeSelectedSportAction
  | IUpdateInputFieldDistance
  | IUpdateInputFieldTime
  | IUpdateInputFieldRythm
  | ITimeInputFieldChanged
  | IRythmInputFieldChanged;
