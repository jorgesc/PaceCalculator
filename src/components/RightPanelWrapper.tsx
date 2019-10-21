import React from "react";
import styled from "styled-components";

import CalculateButtonContainer from "./CalculateButtonContainer";
import LapTimesDisplayWrapper from "./LapTimesDisplayWrapper";

const StyledRightPanelWrapper = styled.div`
  flex: 1 1 0;
  position: relative;
  overflow: hidden;
`;

const RightPanelWrapper = () => {
  return (
    <StyledRightPanelWrapper>
      <LapTimesDisplayWrapper />
    </StyledRightPanelWrapper>
  );
};

export default RightPanelWrapper;
