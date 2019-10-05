import React, {ReactElement} from "react";
import styled from "styled-components";

interface ILabelProps {
  label: string;
}

interface IIconProps {
  icon: string;
}

interface ILabelRowProps extends ILabelProps, IIconProps {}

interface IUnitProps {
  units: string;
}

interface IInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IInputRowProps extends IUnitProps, IInputProps {}

interface IButtonRowProps {
  buttons?: Array<{text: string; value: string}>;
  onClick: (newText: string) => void;
}

interface IInputFieldProps extends ILabelRowProps, IUnitProps {
  placeholder: string;
  value: string;
  onChange: (newText: string) => void;
  buttons?: Array<{text: string; value: string}>;
}

const StyledLabel = styled.label`
  font-size: 0.8em;
`;

const StyledIcon = styled.img`
  height: 1.2em;
  margin-right: 0.4em;
`;

const StyledLabelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

const StyledInputField = styled.div`
  font-size: 2em;
  font-family: "Days One", sans-serif;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 700;
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
`;

const StyledInputRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledInput = styled.input`
width: 100%;
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

const StyledButtonsRow = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  border: none;
  background: #dfdfdf;
  padding: 0.6em 2em 0.6em 2em;

  :hover {
    filter: brightness(90%);
    cursor: pointer;
  }

  :first-of-type {
    border-radius: 8px 0px 0px 8px;
  }

  :last-of-type {
    border-radius: 0px 8px 8px 0px;
  }
`;

const Units = ({units}: IUnitProps): ReactElement => {
  return <StyledUnits>{units}</StyledUnits>;
};

const LabelRow = ({icon, label}: ILabelRowProps): ReactElement => {
  return (
    <StyledLabelRow>
      <StyledIcon src={icon} />
      <StyledLabel>{label}</StyledLabel>
    </StyledLabelRow>
  );
};

const InputRow = ({
  placeholder,
  units,
  value,
  onChange,
}: IInputRowProps): ReactElement => {
  return (
    <StyledInputRow>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Units units={units} />
    </StyledInputRow>
  );
};

const ButtonsRow = ({buttons, onClick}: IButtonRowProps): ReactElement => {
  const renderButtons = (): ReactElement[] | null => {
    if (!buttons) return null;
    return buttons.map((b, i) => (
      <StyledButton key={i} onClick={() => onClick(b.value)}>
        {b.text}
      </StyledButton>
    ));
  };

  return <StyledButtonsRow>{renderButtons()}</StyledButtonsRow>;
};

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
      <LabelRow icon={icon} label={label} />
      <InputRow
        placeholder={placeholder}
        units={units}
        value={value}
        onChange={handleChange}
      />
      <ButtonsRow buttons={buttons} onClick={buttonClick} />
    </StyledInputField>
  );
};

export default InputField;
