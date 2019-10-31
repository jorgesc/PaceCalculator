import React from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox/Checkbox";
import ResetIcon from "../../svgIcons/CloseIcon";
import ActionButton from "../ActionButton/ActionButton";

interface ILapTimesHeaderProps {
  condensedCheckboxChecked: boolean;
  condensedCheckboxClicked: () => void;
  resetButtonClicked: () => void;
}

const StyledLapTimesHeader = styled.div`
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
  condensedCheckboxChecked,
  condensedCheckboxClicked,
  resetButtonClicked,
}: ILapTimesHeaderProps) => {
  return (
    <StyledLapTimesHeader>
      <Wrapper>
        <ButtonsWrapper>
          <CheckboxWrapper>
            <Checkbox
              onChange={condensedCheckboxClicked}
              value={condensedCheckboxChecked}
              leftText={"5 km"}
              rightText={"1 km"}
            />
          </CheckboxWrapper>
          <ActionButton onClick={resetButtonClicked} icon={<ResetIcon />}>
            Reset
          </ActionButton>
        </ButtonsWrapper>
      </Wrapper>
    </StyledLapTimesHeader>
  );
};

export default LapTimesHeader;
