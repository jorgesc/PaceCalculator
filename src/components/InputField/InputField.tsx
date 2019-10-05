import React, {ReactElement} from "react";
import styled from "styled-components";

import FirstRow, {IFirstRowProps} from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

interface IInputFieldProps extends IFirstRowProps {
  placeholder: string;
  value: string;
  onChange: (newText: string) => void;
  units: string;
  buttons?: Array<{text: string; value: string}>;
}

const StyledInputField = styled.div`
  font-size: 2em;
  font-family: "Days One", sans-serif;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 700;
`;

const InputField = ({
  icon,
  label,
  placeholder,
  units,
  value,
  onChange,
  buttons,
}: IInputFieldProps): ReactElement => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  const buttonClick = (val: string): void => {
    onChange(val);
  };

  return (
    <StyledInputField>
      <FirstRow icon={icon} label={label} />
      <SecondRow
        placeholder={placeholder}
        units={units}
        value={value}
        onChange={handleChange}
      />
      <ThirdRow buttons={buttons} onClick={buttonClick} />
    </StyledInputField>
  );
};

export default InputField;
