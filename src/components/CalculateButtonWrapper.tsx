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

const buttonText = "Calcular Tiempos de Paso";
const text =
  "Introduce todos los datos en el formulario anterior y pulsa este botón para ver aquí tus tiempos de paso";

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
