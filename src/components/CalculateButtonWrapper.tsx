import React from "react";
import {connect} from "react-redux";

import {IState} from "../redux/initialState";

import CalculateButtonContainer, {
  IStyledProps,
} from "./CalculateButton/CalculateButtonContainer";

const text =
  "Introduce todos los datos en el formulario anterior y pulsa este botón para ver aquí tus tiempos de paso";

const buttonText = "Calcular Tiempos de Paso";

const CalculateButtonWrapper = (props: IStyledProps) => {
  return (
    <CalculateButtonContainer text={text} buttonText={buttonText} {...props} />
  );
};

const mapStateToProps = (state: IState): IStyledProps => {
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

export default connect(mapStateToProps)(CalculateButtonWrapper);
