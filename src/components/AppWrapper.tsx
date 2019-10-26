import React from "react";
import styled from "styled-components";

import {BREAKPOINTS} from "../constants";

import LeftPanelWrapper from "./LeftPanelWrapper";
import RightPanelWrapper from "./RightPanelWrapper";

export const Separator = styled.div`
  height: 1px;
  background-color: #dfdfdf;
  margin-bottom: 32px;
`;

export const HeaderWrapper = styled.div`
  height: 90px;

  @media (min-width: ${BREAKPOINTS.SMALL}) {
    height: 128px;
  }
`;

export const PanelWrapper = styled.div`
  flex: 1 1 0;
  margin-bottom: 48px;
`;

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
