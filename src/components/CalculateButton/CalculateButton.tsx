import React from "react";
import styled from "styled-components";

interface IStyledProps {
  disabled: boolean;
}

interface ICalculateButtonProps extends IStyledProps {
  buttonText: string;
  onClick: () => void;
}

const StyledCalculateButton = styled.button<IStyledProps>`
  border: none;
  background-color: ${props => (props.disabled ? "#adebad" : "limegreen")};
  padding: 16px 50px 16px 50px;
  border-radius: 5px;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
  font-family: Lato;
  outline: none;
  margin-top: 17px;

  transition: box-shadow 0.25s ease-in-out, background-color 0.4s linear,
    color 0.4s linear;

  :hover:enabled {
    cursor: pointer;
    box-shadow: 0px 7px 28px rgba(0, 0, 0, 0.25),
      0px 10px 10px rgba(0, 0, 0, 0.22);
  }

  :active:enabled {
    transition: box-shadow 0.01s ease-out, transform 0.01s ease-out;
    box-shadow: none;
    outline: none;
  }

  :focus {
    outline: none;
  }
`;

const CalculateButton = (props: ICalculateButtonProps) => {
  const {buttonText, ...remaining} = props;
  return (
    <StyledCalculateButton {...remaining}>{buttonText}</StyledCalculateButton>
  );
};

export default CalculateButton;
