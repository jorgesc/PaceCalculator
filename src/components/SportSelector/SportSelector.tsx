import React, {ReactElement} from "react";
import styled from "styled-components";

import Sport from "../../models/Sport";

import Button from "./SportSelectorButton";

interface ISportSelectorProps {
  sports: Sport[];
  selected: number;
  onChange: (selected: number) => void;
}

const StyledSportSelectorDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const SportSelector = ({
  sports,
  selected,
  onChange,
}: ISportSelectorProps): ReactElement => {
  return (
    <StyledSportSelectorDiv>
      {sports.map((sport: Sport, i: number) => {
        return (
          <Button
            key={i}
            position={i}
            title={sport.name}
            icon={sport.icon}
            selected={selected === i}
            onChange={onChange}
          />
        );
      })}
    </StyledSportSelectorDiv>
  );
};

export default SportSelector;
