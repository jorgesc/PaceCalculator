import React from "react";
import styled from "styled-components";

import CalculateButtonContainer from "./CalculateButtonContainer";
import LapTimesContainer from "./LapTimesContainer";

const StyledRightPanelWrapper = styled.div`
  flex: 1 1 0;
  position: relative;
  overflow: hidden;
`;

const RightPanelWrapper = () => {
  return (
    <StyledRightPanelWrapper>
      <LapTimesContainer
        times={[
          {distance: "km 1", time: "02:11:12"},
          {distance: "km 2", time: "02:15:12"},
        ]}
      />
    </StyledRightPanelWrapper>
  );
};

export default RightPanelWrapper;
