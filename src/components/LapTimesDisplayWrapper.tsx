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

interface IStateProps {
  times: ILapTimesArray;
  condensedCheckboxChecked: boolean;
  lapTimesHeaderText: string;
}

interface IDispatchProps {
  condensedCheckboxOnclick: () => void;
  resetButtonOnclick: () => void;
}

const headerText =
  "Aquí puedes ver los tiempos de paso estimados por cada punto kilométrico";

const LapTimesDisplayWrapper = (
  props: ILapTimesDisplayProps,
): React.ReactElement => {
  return <LapTimesDisplay {...props} />;
};

const mapStateToProps = (state: IState): IStateProps => {
  return {
    times: state.app.lapTimes,
    condensedCheckboxChecked: state.app.condensedCheckboxChecked,
    lapTimesHeaderText: headerText,
  };
};

const mapDispatchToProps = (dispatch: myThunkDispatch): IDispatchProps => {
  return {
    resetButtonOnclick: () => dispatch(resetButtonClicked()),
    condensedCheckboxOnclick: () => dispatch(condensedCheckboxClicked()),
  };
};

export default connect<IStateProps, IDispatchProps, {}, IState>(
  mapStateToProps,
  mapDispatchToProps,
)(LapTimesDisplayWrapper);
