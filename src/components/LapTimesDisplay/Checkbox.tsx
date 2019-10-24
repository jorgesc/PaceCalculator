import React, {useState} from "react";
import styled from "styled-components";

interface ICheckable {
  checked: boolean;
}

interface ICheckboxProps extends ICheckable {
  onChange: () => void;
  label?: string;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledLabel = styled.div`
  margin-right: 10px;
`;

const StyledSlider = styled.div<ICheckable>`
  position: absolute;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;

  transition: left 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  left: ${props => (props.checked ? "25px" : "5px")};
`;

const StyledCheckboxContainer = styled.div<ICheckable>`
  cursor: pointer;
  width: 50px;
  height: 30px;
  position: relative;
  border-radius: 20px;
  box-shadow: inset 0 0 16px #555555;
  background-color: ${props => (props.checked ? "limegreen" : "#cccccc")};

  transition: background-color 0.2s linear, border 0.2s linear;

  &:hover ${StyledSlider} {
    box-shadow: 0 0 6px #555555;
  }
`;

const Checkbox = ({
  onChange,
  label,
  checked,
}: ICheckboxProps): React.ReactElement => {
  return (
    <StyledWrapper>
      {label ? <StyledLabel>{label}</StyledLabel> : null}
      <StyledCheckboxContainer checked={checked} onClick={onChange}>
        <StyledSlider checked={checked} />
      </StyledCheckboxContainer>
    </StyledWrapper>
  );
};

export default Checkbox;
