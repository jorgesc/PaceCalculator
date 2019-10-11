import React, {ReactElement} from "react";
import styled from "styled-components";

import {BREAKPOINTS} from "../../constants";

interface IUnitProps {
  units: string;
}

interface IInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

interface IInputRowProps extends IUnitProps, IInputProps {}

const StyledInputRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledUnits = styled.div`
  font-size: 0.7em;
  display: flex;
  align-items: center;
  color: white;
  background-color: #2185d0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-left: 1em;
  padding-right: 1em;
  min-width: 80px;
  justify-content: center;

  @media (min-width: ${BREAKPOINTS.MOBILE}) {
    min-width: 140px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  min-width: 0px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.8em;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  padding-left: 1em;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid ;
  border-right: 0px;
  border-color: #cccccc
  transition: border-color 0.2s linear;

  :focus {
    border-color: #2185d0;
  }

  ::placeholder{
    color: #cccccc
  }
`;

const Units = ({units}: IUnitProps): ReactElement => {
  return <StyledUnits>{units}</StyledUnits>;
};

const SecondRow = ({
  placeholder,
  units,
  value,
  onChange,
  disabled,
}: IInputRowProps): ReactElement => {
  return (
    <StyledInputRow>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <Units units={units} />
    </StyledInputRow>
  );
};

export default SecondRow;
