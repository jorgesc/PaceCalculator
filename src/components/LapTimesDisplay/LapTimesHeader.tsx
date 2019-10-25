import React from "react";
import styled from "styled-components";

import Checkbox from "./Checkbox";
import ResetButton from "./ResetButton";

interface ILapTimesHeaderProps {
  lapTimesHeaderText: string;
  condensedCheckboxChecked: boolean;
  condensedCheckboxClicked: () => void;
  resetButtonClicked: () => void;
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

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  margin-right: 16px;
`;

const LapTimesHeader = ({
  lapTimesHeaderText,
  condensedCheckboxChecked,
  condensedCheckboxClicked,
  resetButtonClicked,
}: ILapTimesHeaderProps) => {
  return (
    <StyledLapTimesHeader>
      <Wrapper>
        <div>{lapTimesHeaderText}</div>
        <ButtonsWrapper>
          <CheckboxWrapper>
            <Label>Condensed</Label>
            <Checkbox
              onChange={condensedCheckboxClicked}
              checked={condensedCheckboxChecked}
            />
          </CheckboxWrapper>
          <ResetButton onClick={resetButtonClicked}>Reset</ResetButton>
        </ButtonsWrapper>
      </Wrapper>
    </StyledLapTimesHeader>
  );
};

export default LapTimesHeader;
