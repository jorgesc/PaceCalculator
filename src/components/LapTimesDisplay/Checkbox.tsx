import React, {useState} from "react";
import styled from "styled-components";

interface ICheckable {
  checked: boolean;
}

interface ICheckboxProps {
  onChange: (value: boolean) => void;
}

const StyledCheckboxContainer = styled.div<ICheckable>`
  cursor: pointer;
  width: 50px;
  height: 30px;
  position: relative;
  border-radius: 20px;
  box-shadow: inset 0 0 10px gray;
  background-color: ${props => (props.checked ? "limegreen" : "#cccccc")};

  transition: background-color 0.2s linear;
`;

const StyledSlider = styled.div<ICheckable>`
  position: absolute;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;

  transition: left 0.2s ease-in-out;
  left: ${props => (props.checked ? "25px" : "5px")};
`;

const Checkbox = ({onChange}: ICheckboxProps): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  const onClickHandler = () => {
    setChecked(!checked);
    onChange(checked);
  };

  return (
    <StyledCheckboxContainer checked={checked} onClick={onClickHandler}>
      <StyledSlider checked={checked} />
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
