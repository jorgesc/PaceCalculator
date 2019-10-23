import React, {ReactElement} from "react";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";
import styled from "styled-components";

import {IState} from "../redux/initialState";

import InputField from "./InputField/InputField";
import {
  updateInputFieldDistance,
  updateInputFieldTime,
  updateInputFieldRythm,
  AppActionTypes,
} from "../redux/actionCreators";

import {
  distanceInputFieldChanged,
  timeInputFieldChanged,
  rythmInputFieldChanged,
} from "../redux/logicActions";

import distanceIcon from "../static/icon-distance.svg";
import timeIcon from "../static/icon-clock.svg";
import rythmIcon from "../static/icon-stopwatch.svg";

interface IInputFieldsWrapperStateProps {
  rythmUnits: string;
  rythmPlaceholder: string;
  distanceFieldValue: string;
  timeFieldValue: string;
  rythmFieldValue: string;
}

interface IInputFieldsWrapperDispatchProps {
  updateDistance: (newText: string) => void;
  updateTime: (newText: string) => void;
  updateRythm: (newText: string) => void;
}

interface IInputFieldsWrapperProps
  extends IInputFieldsWrapperStateProps,
    IInputFieldsWrapperDispatchProps {}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputFieldsWrapper = ({
  distanceFieldValue,
  timeFieldValue,
  rythmFieldValue,
  rythmUnits,
  rythmPlaceholder,
  updateDistance,
  updateTime,
  updateRythm,
}: IInputFieldsWrapperProps): ReactElement => {
  return (
    <StyledWrapper>
      <InputField
        label="Distance"
        icon={distanceIcon}
        placeholder="10000"
        units="meters"
        value={distanceFieldValue}
        onChange={updateDistance}
      />

      <InputField
        disabled={distanceFieldValue === ""}
        label="Time"
        icon={timeIcon}
        placeholder="02:34:16"
        units="hh:mm:ss"
        value={timeFieldValue}
        onChange={updateTime}
      />

      <InputField
        disabled={distanceFieldValue === ""}
        label="Rythm"
        icon={rythmIcon}
        placeholder={rythmPlaceholder}
        units={rythmUnits}
        value={rythmFieldValue}
        onChange={updateRythm}
      />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: IState): IInputFieldsWrapperStateProps => {
  const selectedSport = state.app.sports[state.app.selectedSport];
  const rythmUnits = selectedSport.units;
  const rythmPlaceholder = selectedSport.rythmPlaceholder;
  const {distanceFieldValue, timeFieldValue, rythmFieldValue} = state.app;

  return {
    rythmUnits,
    rythmPlaceholder,
    distanceFieldValue,
    timeFieldValue,
    rythmFieldValue,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, AppActionTypes>,
): IInputFieldsWrapperDispatchProps => {
  return {
    updateDistance: (s: string) => dispatch(distanceInputFieldChanged(s)),
    updateTime: (s: string) => dispatch(timeInputFieldChanged(s)),
    updateRythm: (s: string) => dispatch(rythmInputFieldChanged(s)),
  };
};

export default connect<
  IInputFieldsWrapperStateProps,
  IInputFieldsWrapperDispatchProps,
  {},
  IState
>(
  mapStateToProps,
  mapDispatchToProps,
)(InputFieldsWrapper);
