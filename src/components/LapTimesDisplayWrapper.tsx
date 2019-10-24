import React from "react";
import {connect} from "react-redux";

import {IState} from "../redux/initialState";

import LapTimesDisplay, {
  ILapTimesDisplayProps,
} from "./LapTimesDisplay/LapTimesDisplay";

const headerText =
  "Aquí puedes ver los tiempos de paso estimados por cada punto kilométrico";

const LapTimesDisplayWrapper = (
  props: ILapTimesDisplayProps,
): React.ReactElement => {
  return <LapTimesDisplay {...props} />;
};

const mapStateToProps = (state: IState): ILapTimesDisplayProps => {
  return {
    times: state.app.lapTimes,
    condensedCheckboxChecked: false,
    condensedCheckboxOnclick: () => null,
    lapTimesHeaderText: headerText,
    resetButtonOnclick: () => null,
  };
};

export default connect(mapStateToProps)(LapTimesDisplayWrapper);
