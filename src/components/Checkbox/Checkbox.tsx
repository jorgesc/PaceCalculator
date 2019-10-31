import React, {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";

interface IUncontrolledCheckboxProps {
  onChange: (value: boolean) => void;
}

export interface IControlledCheckboxProps {
  value: boolean;
  onChange: () => void;
}

type ICheckboxProps = IUncontrolledCheckboxProps | IControlledCheckboxProps;

const size = 6;

const backgroundColor = "#e6e6e6";
const backgroundColorActive = "#428bca";
const backgroundColorActiveHover = "#3071a9;";

const borderColor = "#cdcdcd";
const borderColorHover = "#adadad";
const borderColorActive = "#357ebd";
const borderColorActiveHover = "#285e8e";

const StyledWrapper = styled.div<{checked: boolean}>`
  width: ${12 * size}px;
  height: ${6 * size}px;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;

  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);

  border: solid 1px
    ${props => (props.checked ? borderColorActive : borderColor)};

  transition: border 0.25s;

  :hover {
    border-color: ${props =>
      props.checked ? borderColorActiveHover : borderColorHover};
  }
`;

const StyledSwitchInner = styled.div<{checked: boolean}>`
position:relative;
  margin-top: 0px;
  margin-left: ${props => (props.checked ? 0 : -9 * size)}px;
  height: 100%
  width: ${21 * size}px;
  border-radius: 2px;

  display:flex;
  flex-direction: row;
  align-items: stretch;

  transition: margin-left 0.25s ;
`;

const StyledSwitchKnob = styled.div`
  margin-top: 0px;
  height: ${8 * size}px;
  width: ${3 * size}px;
  background-color: white;
  box-sizing: border-box;
  border: solid 1px ${borderColor};
  border-radius: 2px;

  position: absolute;
  left: ${9 * size}px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);

  transition: all 0.1s;

  :hover {
    background-color: #f8f8f8;
  }
`;

const StyledText = styled.div`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColor};
`;

const StyledTextLeft = styled(StyledText)`
  background-color: ${backgroundColorActive};
  text-align: right;
  color: white;

  transition: all 0.1s;

  :hover {
    background-color: ${backgroundColorActiveHover};
  }
`;

const ControlledCheckbox = ({value, onChange}: IControlledCheckboxProps) => {
  return (
    <StyledWrapper checked={value} onClick={onChange}>
      <StyledSwitchInner checked={value}>
        <StyledTextLeft>On</StyledTextLeft>
        <StyledSwitchKnob />
        <StyledText>Off</StyledText>
      </StyledSwitchInner>
    </StyledWrapper>
  );
};

const UncontrolledCheckbox = (props: IUncontrolledCheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
    props.onChange(!checked); // It won't really update the value until next render!!!
  };
  return <ControlledCheckbox value={checked} onChange={onChange} />;
};

function isControlled(obj: ICheckboxProps): obj is IControlledCheckboxProps {
  return obj.hasOwnProperty("value");
}

export default (props: ICheckboxProps) => {
  return isControlled(props) ? (
    <ControlledCheckbox {...props} />
  ) : (
    <UncontrolledCheckbox {...props} />
  );
};
