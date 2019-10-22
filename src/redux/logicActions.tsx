import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IState} from "./initialState";
import Sport from "../models/Sport";
import {
  AppActionTypes,
  updateInputFieldTime,
  updateInputFieldRythm,
  changeSelectedSportAction,
  updateLapTimes,
} from "./actionCreators";

import {HHMMSSToSeconds, secondsToHHMMSS} from "../utils";

type myThunkAction<T> = ThunkAction<T, IState, undefined, AppActionTypes>;
export type myThunkDispatch = ThunkDispatch<IState, undefined, AppActionTypes>;
type myGetState = () => IState;

interface ICleanedState {
  sport: Sport;
  distance: number;
  timeFieldValue: string;
  rythmFieldValue: string;
}

const getSelectedSportInstance = (state: IState): Sport => {
  const {sports, selectedSport} = state.app;
  return sports[selectedSport];
};

const cleanState = (state: IState): ICleanedState => {
  const sport = getSelectedSportInstance(state);
  const {distanceFieldValue, rythmFieldValue, timeFieldValue} = state.app;
  const distance = parseInt(distanceFieldValue, 10);
  return {sport, distance, rythmFieldValue, timeFieldValue};
};

export const updateTimeFromState = (): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const {sport, distance, rythmFieldValue} = cleanState(getState());
    const newTime = sport.calculateTotalTimeFromRythm(
      distance,
      rythmFieldValue,
    );
    dispatch(updateInputFieldTime(newTime));
  };
};

export const updateRythmFromState = (): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const {sport, distance, timeFieldValue} = cleanState(getState());
    const newRythm = sport.calculateRythmFromTotalTime(
      distance,
      timeFieldValue,
    );
    dispatch(updateInputFieldRythm(newRythm));
  };
};

export const timeInputFieldChanged = (s: string): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const {sport, timeFieldValue} = cleanState(getState());
    const newTime = sport.cleanInputTime(s, timeFieldValue);
    dispatch(updateInputFieldTime(newTime));
    dispatch(updateRythmFromState());
  };
};

export const rythmInputFieldChanged = (s: string): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const {sport, rythmFieldValue} = cleanState(getState());
    const newRythm = sport.cleanInputRythm(s, rythmFieldValue);
    dispatch(updateInputFieldRythm(newRythm));
    dispatch(updateTimeFromState());
  };
};

export const sportSelectorClicked = (s: number): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    dispatch(changeSelectedSportAction(s));
    dispatch(updateRythmFromState());
  };
};

export const calculateLapTimes = (): myThunkAction<void> => {
  return (dispatch: myThunkDispatch, getState: myGetState): void => {
    const state = getState();
    const distance = parseInt(state.app.distanceFieldValue, 10);
    const steps = [...new Array(Math.floor(distance / 1000))].map(
      (v, i) => i + 1,
    );
    const time = HHMMSSToSeconds(state.app.timeFieldValue);
    const speed = distance / time;

    const lapTimes = steps.map(v => {
      const t = secondsToHHMMSS((v * 1000) / speed);
      return {label: `km ${v}`, time: t};
    });

    dispatch(updateLapTimes(lapTimes));
  };
};
