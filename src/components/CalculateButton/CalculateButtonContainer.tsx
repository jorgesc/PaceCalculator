import React from "react";
import styled from "styled-components";

import {BREAKPOINTS} from "../../constants";

import CalculateButton from "./CalculateButton";

interface IStyledProps {
  hidden?: boolean;
}

export interface ICalculateButtonContainerProps extends IStyledProps {
  text: string;
  buttonText: string;
  onClick: () => void;
  disabled: boolean;
}

const StyledCalculateButtonContainer = styled.div<IStyledProps>`
  z-index: 1;
  font-size: 0.65em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 128px;
  background-color: white;

  position: absolute;
  top: 0px;

  left: ${props => (props.hidden ? "120%" : "0")};
  opacity: ${props => (props.hidden ? "0" : "1")};
  transition: left 0.5s ease-in 0.1s, opacity 0.4s ease-in 0.1s;

  @media (min-width: ${BREAKPOINTS.SMALL}) {
    font-size: 0.8em;
  }
`;

const CalculateButtonContainer = (props: ICalculateButtonContainerProps) => {
  const {hidden, text, ...calculateButtonProps} = props;
  return (
    <StyledCalculateButtonContainer hidden={hidden}>
      <div>{text}</div>
      <CalculateButton {...calculateButtonProps} />
    </StyledCalculateButtonContainer>
  );
};

export default CalculateButtonContainer;
