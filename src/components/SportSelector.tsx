import React from "react";
import styled from "styled-components";

import Button from "./SportSelectorButton";

import CyclingIcon from "../static/2biking_icon.png";
import RunningIcon from "../static/2running_icon.png";
import SwimmingIcon from "../static/2swim_icon.png";

const StyledSportSelectorDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const SportSelector = () => {
  return (
    <StyledSportSelectorDiv>
      <Button title="Atletismo" icon={RunningIcon} />
      <Button title="Ciclismo" icon={CyclingIcon} />
      <Button title="Natación" icon={SwimmingIcon} />
    </StyledSportSelectorDiv>
  );
};

export default SportSelector;
