import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {IState} from "../redux/store";
import Sport from "../models/Sport";

import SportSelector, {
  ISportSelectorProps,
} from "./SportSelector/SportSelector";

import {changeSelectedSportAction} from "../redux/actionCreators";

interface IComponentStateProps {
  sports: Sport[];
  selected: number;
}

interface IComponentDispatchProps {
  onChange: (selected: number) => void;
}

const StyledWrapper = styled.div`
  margin-bottom: 30px;
`;

const SportSelectorWrapper = (props: ISportSelectorProps) => {
  return (
    <StyledWrapper>
      <SportSelector {...props} />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: IState): IComponentStateProps => {
  const {sports, selectedSport} = state.app;
  return {sports, selected: selectedSport};
};

const mapDispatchToProps = (dispatch: Dispatch): IComponentDispatchProps => {
  return {
    onChange: (selected: number) =>
      dispatch(changeSelectedSportAction(selected)),
  };
};

export default connect<
  IComponentStateProps,
  IComponentDispatchProps,
  {},
  IState
>(
  mapStateToProps,
  mapDispatchToProps,
)(SportSelectorWrapper);
