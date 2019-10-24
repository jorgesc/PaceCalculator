import React from "react";
import styled from "styled-components";

import ResetIcon from "../CloseIcon";

interface IResetButtonProps {
  children: string;
  onClick: () => void;
}

const StyledResetButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  border: none;
  background-color: #dfdfdf;
  border-color: blue;
  padding: 10px 32px 10px 32px;
  border-radius: 8px;
  cursor: pointer;
  color: #333
  font-weight: bold;

  transition: all 150ms ease;

  :hover {
    box-shadow: 0px 3px 7px rgba(1, 0, 0, 0.25),
      0px 5px 5px rgba(1, 0, 0, 0.22);
  }

  :active {
    transition: box-shadow 0.01s ease-out;
    box-shadow: none;
  }
`;

const StyledIcon = styled.div`
  margin-right: 8px;
  width: 12px;
  height: 12px;

  svg {
    fill: #333;
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
