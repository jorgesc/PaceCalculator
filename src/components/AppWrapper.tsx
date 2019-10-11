import React from "react";
import styled from "styled-components";

import {BREAKPOINTS} from "../constants";

import LeftPanelWrapper from "./LeftPanelWrapper";

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
      <div style={{flex: "1 1 0"}}></div>
    </StyledAppWrapper>
  );
};

export default AppWrapper;
