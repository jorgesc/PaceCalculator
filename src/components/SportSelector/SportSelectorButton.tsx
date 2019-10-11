import React from "react";
import styled from "styled-components";

interface IButtonProps {
  title: string;
  icon: string;
  selected: boolean;
  position: number;
  onChange: (selected: number) => void;
}

interface IStyleProps {
  title: string;
  icon: string;
  selected: boolean;
}

const StyledButton = styled.button<IStyleProps>`
  color: ${props => (props.selected ? "white" : "gray")};
  background-color: ${props => (props.selected ? "limeGreen" : "#dfdfdf")};
  font-size: 1.2em;
  font-weight: bold;

  height: 100px;
  display: inline-block;
  flex-grow: 1;
  border-radius: 0px;
  border: none;
  padding: 10px;

  transition: filter 0.5s, background-color 0.25s;

  :first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  :last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  :active {
    border: none;
    box-shadow: none;
  }

  :hover {
    cursor: pointer;
    filter: brightness(90%);
  }

  :focus {
    outline: 0;
  }

  ::-moz-focus-inner {
    border: 0;
  }
`;

const StyledIconImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
`;

const SportSelectorButton = ({
  title,
  icon,
  selected,
  position,
  onChange,
}: IButtonProps) => {
  const onClick = () => {
    onChange(position);
  };

  return (
    <StyledButton
      selected={selected}
      title={title}
      icon={icon}
      onClick={onClick}>
      <div>{title}</div>
      <StyledIconImage src={icon} />
    </StyledButton>
  );
};

export default SportSelectorButton;
