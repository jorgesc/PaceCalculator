import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {IState} from "../redux/store";
import Sport from "../models/Sport";

import SportSelector, {
  ISportSelectorProps,
} from "./SportSelector/SportSelector";

import {changeSelectedSportAction} from "../redux/actions";

interface IComponentStateProps {
  sports: Sport[];
  selected: number;
}

interface IComponentDispatchProps {
  onChange: (selected: number) => void;
}

const SportSelectorWrapper = (props: ISportSelectorProps) => {
  return <SportSelector {...props} />;
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
