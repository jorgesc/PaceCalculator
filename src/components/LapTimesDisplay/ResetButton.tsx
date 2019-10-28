import React from "react";
import styled from "styled-components";

import ResetIcon from "../../svgIcons/CloseIcon";

interface IResetButtonProps {
  children: string;
  onClick: () => void;
}

const StyledIcon = styled.div`
  margin-right: 8px;
  width: 10px;
  height: 10px;
  position: relative;

  svg {
    position: absolute;
    top: 0px;
    left: 0px;
    fill: #eeeeee;
  }
`;

const StyledResetButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: none;
  background-color: #27292a;
  padding: 16px 32px 16px 32px;
  border-radius: 4px;
  cursor: pointer;
  color: #eeeeee;
  font-weight: bold;
  font-size: 0.95em;

  :after {
    content: "";
    position: absolute;
    height: 4px;
    width: 0px;
    background-color: limegreen;
    bottom: 0px;
    left: 0px;

    transition: all 0.5s;
  }

  :hover:after {
    width: 100%;
  }
`;

const ResetButton = ({
  children,
  onClick,
}: IResetButtonProps): React.ReactElement => {
  return (
    <StyledResetButton onClick={onClick}>
      <StyledIcon>
        <ResetIcon />
      </StyledIcon>
      {children}
    </StyledResetButton>
  );
};

export default ResetButton;
