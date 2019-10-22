import React from "react";
import styled from "styled-components";

import CalculateButtonWrapper from "./CalculateButtonWrapper";
import LapTimesDisplayWrapper from "./LapTimesDisplayWrapper";

const StyledRightPanelWrapper = styled.div`
  flex: 1 1 0;
  position: relative;
  overflow: hidden;
`;

const RightPanelWrapper = () => {
  return (
    <StyledRightPanelWrapper>
      <CalculateButtonWrapper />
      <LapTimesDisplayWrapper />
    </StyledRightPanelWrapper>
  );
};

export default RightPanelWrapper;
