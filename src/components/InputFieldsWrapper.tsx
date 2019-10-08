import React, {ReactElement} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import styled from "styled-components";

import {IState} from "../redux/store";

import InputField from "./InputField/InputField";
import {updateInputFieldDistance, AppActionTypes} from "../redux/actions";

import distanceIcon from "../static/icon-distance.svg";
import timeIcon from "../static/icon-clock.svg";
import rythmIcon from "../static/icon-stopwatch.svg";

interface IInputFieldsWrapperStateProps {
  rythmUnits: string;
  rythmPlaceholder: string;
  distanceValue: string;
}

interface IInputFieldsWrapperDispatchProps {
  updateDistance: (newText: string) => void;
}

interface IInputFieldsWrapperProps
  extends IInputFieldsWrapperStateProps,
    IInputFieldsWrapperDispatchProps {}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputFieldsWrapper = ({
  distanceValue,
  rythmUnits,
  rythmPlaceholder,
  updateDistance,
}: IInputFieldsWrapperProps): ReactElement => {
  return (
    <StyledWrapper>
      <InputField
        label="Distance"
        icon={distanceIcon}
        placeholder="10000"
        units="meters"
        value={distanceValue}
        onChange={updateDistance}
      />

      <InputField
        disabled={distanceValue === ""}
        label="Time"
        icon={timeIcon}
        placeholder="02:34:16"
        units="hh:mm:ss"
        value=""
        onChange={() => null}
      />

      <InputField
        disabled={distanceValue === ""}
        label="Rythm"
        icon={rythmIcon}
        placeholder={rythmPlaceholder}
        units={rythmUnits}
        value=""
        onChange={() => null}
      />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: IState): IInputFieldsWrapperStateProps => {
  const selectedSport = state.app.sports[state.app.selectedSport];
  const rythmUnits = selectedSport.units;
  const rythmPlaceholder = selectedSport.rythmPlaceholder;
  const distanceValue = state.app.distanceFieldValue;
  return {rythmUnits, rythmPlaceholder, distanceValue};
};

const mapDispatchToProps = (
  dispatch: Dispatch,
): IInputFieldsWrapperDispatchProps => {
  return {
    updateDistance: (s: string) => dispatch(updateInputFieldDistance(s)),
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
