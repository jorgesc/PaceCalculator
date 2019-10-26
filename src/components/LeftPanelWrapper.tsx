import React from "react";
import styled from "styled-components";

import SportSelectorWrapper from "./SportSelectorWrapper";
import InputFieldsWrapper from "./InputFieldsWrapper";

import {Separator, HeaderWrapper, PanelWrapper} from "./AppWrapper";

const LeftPanelWrapper = () => {
  return (
    <PanelWrapper>
      <HeaderWrapper>
        <SportSelectorWrapper />
      </HeaderWrapper>
      <Separator />
      <InputFieldsWrapper />
    </PanelWrapper>
  );
};

export default LeftPanelWrapper;
