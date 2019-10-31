import React from "react";
import styled from "styled-components";

import {BREAKPOINTS} from "../../constants";

import Button from "./Button";

interface IStyledProps {
  hidden?: boolean;
}

export interface ICalculateButtonProps extends IStyledProps {
  text: string;
  buttonText: string;
  onClick: () => void;
  disabled: boolean;
}

const StyledCalculateButton = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;
  font-size: 0.65em;
  text-align: center;
  width: 100%;
  height: 128px;
  background-color: white;

  border-bottom: solid 1px #dfdfdf;

  position: absolute;
  top: 0px;

  left: ${props => (props.hidden ? "120%" : "0")};
  opacity: ${props => (props.hidden ? "0" : "1")};
  transition: left 0.5s ease-in 0.1s, opacity 0.4s ease-in 0.1s;

  @media (min-width: ${BREAKPOINTS.SMALL}) {
    font-size: 0.8em;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: center;
  justify-content: space-between;
`;

const CalculateButton = (props: ICalculateButtonProps) => {
  const {hidden, text, ...buttonProps} = props;
  return (
    <StyledCalculateButton hidden={hidden}>
      <StyledContentWrapper>
        <div>{text}</div>
        <Button {...buttonProps} />
      </StyledContentWrapper>
    </StyledCalculateButton>
  );
};

export default CalculateButton;
