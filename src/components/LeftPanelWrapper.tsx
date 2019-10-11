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

const LeftPanelWrapper = () => {
  return (
    <div>
      <ComponentWrapper>
        <SportSelectorWrapper />
      </ComponentWrapper>
      <Separator />
      <ComponentWrapper>
        <InputFieldsWrapper />
      </ComponentWrapper>
    </div>
  );
};

export default LeftPanelWrapper;
