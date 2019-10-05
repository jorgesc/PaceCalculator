import React, {ReactElement} from "react";
import styled from "styled-components";

interface ILabelProps {
  label: string;
}

interface IIconProps {
  icon: string;
}

export interface IFirstRowProps extends ILabelProps, IIconProps {}

const StyledLabel = styled.label`
  font-size: 0.8em;
`;

const StyledIcon = styled.img`
  height: 1.2em;
  margin-right: 0.4em;
`;

const StyledLabelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

const FirstRow = ({icon, label}: IFirstRowProps): ReactElement => {
  return (
    <StyledLabelRow>
      <StyledIcon src={icon} />
      <StyledLabel>{label}</StyledLabel>
    </StyledLabelRow>
  );
};

export default FirstRow;
