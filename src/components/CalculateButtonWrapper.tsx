import React from "react";
import {connect} from "react-redux";

import {IState} from "../redux/initialState";
import {calculateLapTimesClicked, myThunkDispatch} from "../redux/logicActions";

import CalculateButton, {ICalculateButtonProps} from "./CalculateButton";

type IStateProps = Pick<
  ICalculateButtonProps,
  "hidden" | "disabled" | "text" | "buttonText"
>;
type IDispatchProps = Pick<ICalculateButtonProps, "onClick">;

const buttonText = "Calculate Lap Times";
const text =
  "Fill the previous form and click this button to calculate your lap times";

const CalculateButtonWrapper = (props: ICalculateButtonProps) => {
  return <CalculateButton {...props} />;
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
