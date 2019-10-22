import React from "react";
import {connect} from "react-redux";

import {IState} from "../redux/initialState";
import {calculateLapTimes, myThunkDispatch} from "../redux/logicActions";

import CalculateButtonContainer from "./CalculateButton/CalculateButtonContainer";

interface IStateProps {
  hidden?: boolean;
  disabled: boolean;
}

interface IDispatchProps {
  onClick: () => void;
}

interface IWrapperProps extends IStateProps, IDispatchProps {}

const buttonText = "Calcular Tiempos de Paso";
const text =
  "Introduce todos los datos en el formulario anterior y pulsa este botón para ver aquí tus tiempos de paso";

const CalculateButtonWrapper = (props: IWrapperProps) => {
  return (
    <CalculateButtonContainer text={text} buttonText={buttonText} {...props} />
  );
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
  };
};

const mapDispatchToProps = (dispatch: myThunkDispatch): IDispatchProps => {
  return {onClick: () => dispatch(calculateLapTimes())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculateButtonWrapper);
