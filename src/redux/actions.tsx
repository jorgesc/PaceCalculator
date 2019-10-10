import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IState} from "./store";
import Sport from "../models/Sport";
import {
  AppActionTypes,
  updateInputFieldTime,
  updateInputFieldRythm,
} from "./actionCreators";

type myThunkAction<T> = ThunkAction<T, IState, undefined, AppActionTypes>;
export type myThunkDispatch = ThunkDispatch<IState, undefined, AppActionTypes>;
type myGetState = () => IState;

const getSelectedSportInstance = (state: IState): Sport => {
  const {sports, selectedSport} = state.app;
  return sports[selectedSport];
};

export const updateTimeFromState = (): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const state = getState();
    const sport = getSelectedSportInstance(state);
    const {distanceFieldValue, rythmFieldValue} = state.app;
    const distance = parseInt(distanceFieldValue, 10);
    const newTime = sport.calculateTotalTimeFromRythm(
      distance,
      rythmFieldValue,
    );
    dispatch(updateInputFieldTime(newTime));
  };
};

export const updateRythmFromState = (): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const state = getState();
    const sport = getSelectedSportInstance(state);
    const {distanceFieldValue, timeFieldValue} = state.app;
    const distance = parseInt(distanceFieldValue, 10);
    const newRythm = sport.calculateRythmFromTotalTime(
      distance,
      timeFieldValue,
    );
    dispatch(updateInputFieldRythm(newRythm));
  };
};

export const timeInputFieldChanged = (s: string): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const state = getState();
    const sport = getSelectedSportInstance(state);
    const {timeFieldValue} = state.app;
    const newTime = sport.cleanInputTime(s, timeFieldValue);
    dispatch(updateInputFieldTime(newTime));
    dispatch(updateRythmFromState());
  };
};

export const rythmInputFieldChanged = (s: string): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const state = getState();
    const sport = getSelectedSportInstance(state);
    const {rythmFieldValue} = getState().app;
    const newRythm = sport.cleanInputRythm(s, rythmFieldValue);
    dispatch(updateInputFieldRythm(newRythm));
    dispatch(updateTimeFromState());
  };
};
