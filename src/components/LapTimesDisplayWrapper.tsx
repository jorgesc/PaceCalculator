import React from "react";
import {connect} from "react-redux";

import {
  myThunkDispatch,
  resetButtonClicked,
  condensedCheckboxClicked,
} from "../redux/logicActions";

import {IState} from "../redux/initialState";

import LapTimesDisplay, {
  ILapTimesArray,
  ILapTimesDisplayProps,
} from "./LapTimesDisplay/LapTimesDisplay";

type IStateProps = Pick<
  ILapTimesDisplayProps,
  "lapTimes" | "condensedCheckboxChecked"
>;

type IDispatchProps = Pick<
  ILapTimesDisplayProps,
  "condensedCheckboxClicked" | "resetButtonClicked"
>;

const LapTimesDisplayWrapper = (
  props: ILapTimesDisplayProps,
): React.ReactElement => {
  return <LapTimesDisplay {...props} />;
};

const mapStateToProps = (state: IState): IStateProps => {
  const {lapTimes, condensedCheckboxChecked} = state.app;
  return {condensedCheckboxChecked, lapTimes};
};

export default connect<IStateProps, IDispatchProps, {}, IState>(
  mapStateToProps,
  {resetButtonClicked, condensedCheckboxClicked},
)(LapTimesDisplayWrapper);
