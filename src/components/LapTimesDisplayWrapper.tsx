import React from "react";
import {connect} from "react-redux";

import {IState} from "../redux/initialState";

import LapTimesDisplay, {
  ILapTimesDisplayProps,
} from "./LapTimesDisplay/LapTimesDisplay";

const LapTimesDisplayWrapper = (
  props: ILapTimesDisplayProps,
): React.ReactElement => {
  return <LapTimesDisplay {...props} />;
};

const mapStateToProps = (state: IState): ILapTimesDisplayProps => {
  return {times: state.app.lapTimes};
};

export default connect(mapStateToProps)(LapTimesDisplayWrapper);
