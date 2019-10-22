import React from "react";
import styled from "styled-components";

import CalculateButton from "./CalculateButton";

export interface IStyledProps {
  hidden?: boolean;
  disabled?: boolean;
}

interface ICalculateButtonContainerProps extends IStyledProps {
  text: string;
  buttonText: string;
}

const StyledCalculateButtonContainer = styled.div<IStyledProps>`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: white;

  border-bottom: solid 1px #dfdfdf;
  padding-bottom: 27px;

  position: absolute;

  left: ${props => (props.hidden ? "120%" : "0")};
  opacity: ${props => (props.hidden ? "0" : "1")};
  transition: left 0.5s ease-in 0.1s, opacity 0.4s ease-in 0.1s;
`;

const CalculateButtonContainer = ({
  hidden,
  text,
  buttonText,
  disabled,
}: ICalculateButtonContainerProps) => {
  return (
    <StyledCalculateButtonContainer hidden={hidden}>
      <div>{text}</div>
      <CalculateButton text={buttonText} disabled={!!disabled} />
    </StyledCalculateButtonContainer>
  );
};

export default CalculateButtonContainer;
