import React from "react";
import styled from "styled-components";

import CalculateButtonWrapper from "./CalculateButtonWrapper";
import LapTimesDisplayWrapper from "./LapTimesDisplayWrapper";

import {PanelWrapper} from "./AppWrapper";

const RightPanelWrapper = () => {
  return (
    <PanelWrapper style={{position: "relative"}}>
      <LapTimesDisplayWrapper />
      <CalculateButtonWrapper />
    </PanelWrapper>
  );
};

export default RightPanelWrapper;
