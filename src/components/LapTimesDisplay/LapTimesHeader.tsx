import React from "react";
import styled from "styled-components";

import Checkbox from "./Checkbox";
import ResetButton from "./ResetButton";

interface ILapTimesHeaderProps {
  lapTimesHeaderText: string;
  condensedCheckboxChecked: boolean;
  condensedCheckboxOnclick: () => void;
  resetButtonOnclick: () => void;
}

const StyledLapTimesHeader = styled.div`
  height: 130px;
  border-bottom: solid 1px #dfdfdf;
  text-align: center;
  font-family: Lato;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 84px;
  margin-right: 84px;
`;

const LapTimesHeader = ({
  lapTimesHeaderText,
  condensedCheckboxChecked,
  condensedCheckboxOnclick,
  resetButtonOnclick,
}: ILapTimesHeaderProps) => {
  return (
    <StyledLapTimesHeader>
      <Wrapper>
        <div>{lapTimesHeaderText}</div>
        <ButtonsWrapper>
          <Checkbox
            onChange={condensedCheckboxOnclick}
            checked={condensedCheckboxChecked}
          />
          <ResetButton onClick={resetButtonOnclick}>Reset</ResetButton>
        </ButtonsWrapper>
      </Wrapper>
    </StyledLapTimesHeader>
  );
};

export default LapTimesHeader;
