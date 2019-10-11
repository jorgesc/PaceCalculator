import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";

import {IState} from "../redux/store";
import Sport from "../models/Sport";

import {myThunkDispatch} from "../redux/logicActions";

import SportSelector, {
  ISportSelectorProps,
} from "./SportSelector/SportSelector";

import {changeSelectedSportAction} from "../redux/actionCreators";
import {sportSelectorClicked} from "../redux/logicActions";

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

const mapDispatchToProps = (
  dispatch: myThunkDispatch,
): IComponentDispatchProps => {
  return {
    onChange: (selected: number) => dispatch(sportSelectorClicked(selected)),
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
