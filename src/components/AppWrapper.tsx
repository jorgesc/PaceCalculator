import React from "react";
import styled from "styled-components";

import {BREAKPOINTS} from "../constants";

import LeftPanelWrapper from "./LeftPanelWrapper";
import RightPanelWrapper from "./RightPanelWrapper";

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.SMALL}) {
    flex-direction: row;
  }
`;

const AppWrapper = () => {
  return (
    <StyledAppWrapper>
      <LeftPanelWrapper />
      <RightPanelWrapper />
    </StyledAppWrapper>
  );
};

export default AppWrapper;
