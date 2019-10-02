import React, {ReactElement} from "react";
import styled from "styled-components";

import Sport from "../Sport";

import Button from "./SportSelectorButton";

import CyclingIcon from "../static/2biking_icon.png";
import RunningIcon from "../static/2running_icon.png";
import SwimmingIcon from "../static/2swim_icon.png";

interface ISportSelectorProps {
  sports: Sport[];
  selected: number;
}

const StyledSportSelectorDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const SportSelector = ({
  sports,
  selected,
}: ISportSelectorProps): ReactElement => {
  return (
    <StyledSportSelectorDiv>
      {sports.map((sport: Sport, i: number) => {
        return (
          <Button
            key={i}
            title={sport.name}
            icon={sport.icon}
            selected={selected === i}
          />
        );
      })}
    </StyledSportSelectorDiv>
  );
};

export default SportSelector;
