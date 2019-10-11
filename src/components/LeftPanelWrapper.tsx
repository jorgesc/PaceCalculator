import React from "react";
import styled from "styled-components";

import SportSelectorWrapper from "./SportSelectorWrapper";
import InputFieldsWrapper from "./InputFieldsWrapper";

const Separator = styled.div`
  height: 1px;
  background-color: #dfdfdf;
  margin-bottom: 32px;
`;

const ComponentWrapper = styled.div`
  margin: 0px 12px 0px 12px;
`;

const StyledLeftPanelWrapper = styled.div`
  flex: 1 1 0;
`;

const LeftPanelWrapper = () => {
  return (
    <StyledLeftPanelWrapper>
      <ComponentWrapper>
        <SportSelectorWrapper />
      </ComponentWrapper>
      <Separator />
      <ComponentWrapper>
        <InputFieldsWrapper />
      </ComponentWrapper>
    </StyledLeftPanelWrapper>
  );
};

export default LeftPanelWrapper;
