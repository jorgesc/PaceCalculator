import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";

import {IState} from "../redux/initialState";
import {sportSelectorClicked, myThunkDispatch} from "../redux/logicActions";
import SportSelector, {ISportSelectorProps} from "./SportSelector";

type IStateProps = Pick<ISportSelectorProps, "sports" | "selected">;
type IDispatchProps = Pick<ISportSelectorProps, "onChange">;

const StyledWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: 100%;
`;

const SportSelectorWrapper = (props: ISportSelectorProps) => {
  return (
    <StyledWrapper>
      <SportSelector {...props} />
    </StyledWrapper>
  );
};

const mapStateToProps = (state: IState): IStateProps => {
  const {sports, selectedSport} = state.app;
  return {sports, selected: selectedSport};
};

const mapDispatchToProps = (dispatch: myThunkDispatch): IDispatchProps => {
  return {
    onChange: (selected: number) => dispatch(sportSelectorClicked(selected)),
  };
};

export default connect<IStateProps, IDispatchProps, {}, IState>(
  mapStateToProps,
  mapDispatchToProps,
)(SportSelectorWrapper);
