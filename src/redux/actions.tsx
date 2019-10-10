import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IState} from "./store";
import Sport from "../models/Sport";
import {
  AppActionTypes,
  updateInputFieldTime,
  updateInputFieldRythm,
} from "./actionCreators";

type myThunkAction<T> = ThunkAction<T, IState, undefined, AppActionTypes>;
type myThunkDispatch = ThunkDispatch<IState, undefined, AppActionTypes>;
type myGetState = () => IState;

const getSelectedSportInstance = (state: IState): Sport => {
  const {sports, selectedSport} = state.app;
  return sports[selectedSport];
};

export const timeInputFieldChanged = (s: string): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const state = getState();
    const sport = getSelectedSportInstance(state);
    const {timeFieldValue} = state.app;
    const newTime = sport.cleanInputTime(s, timeFieldValue);
    dispatch(updateInputFieldTime(newTime));

    const {distanceFieldValue} = state.app;
    const distance = parseInt(distanceFieldValue, 10);
    const newRythm = sport.calculateRythmFromTotalTime(distance, newTime);
    dispatch(updateInputFieldRythm(newRythm));
  };
};
export const rythmInputFieldChanged = (s: string): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const {
      distanceFieldValue,
      rythmFieldValue,
      sports,
      selectedSport,
    } = getState().app;
    const distance = parseInt(distanceFieldValue, 10);
    const newRythm = sports[selectedSport].cleanInputRythm(s, rythmFieldValue);
    const newTime = sports[selectedSport].calculateTotalTimeFromRythm(
      distance,
      newRythm,
    );
    dispatch(updateInputFieldRythm(newRythm));
    dispatch(updateInputFieldTime(newTime));
  };
};
