import React from "react";
import {connect} from "react-redux";

import {IState} from "../redux/initialState";
import {calculateLapTimesClicked, myThunkDispatch} from "../redux/logicActions";

import CalculateButtonContainer, {
  ICalculateButtonContainerProps,
} from "./CalculateButton/CalculateButtonContainer";

type IStateProps = Pick<
  ICalculateButtonContainerProps,
  "hidden" | "disabled" | "text" | "buttonText"
>;
type IDispatchProps = Pick<ICalculateButtonContainerProps, "onClick">;

const buttonText = "Calculate Lap Times";
const text =
  "Fill the previous form and click this button to calculate your lap times";

const CalculateButtonWrapper = (props: ICalculateButtonContainerProps) => {
  return <CalculateButtonContainer {...props} />;
};

const mapStateToProps = (state: IState): IStateProps => {
  const {
    distanceFieldValue,
    timeFieldValue,
    rythmFieldValue,
    lapTimes,
  } = state.app;
  return {
    hidden: !!lapTimes,
    disabled: !distanceFieldValue || !timeFieldValue || !rythmFieldValue,
    text,
    buttonText,
  };
};

const mapDispatchToProps = (dispatch: myThunkDispatch): IDispatchProps => {
  return {onClick: () => dispatch(calculateLapTimesClicked())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculateButtonWrapper);
