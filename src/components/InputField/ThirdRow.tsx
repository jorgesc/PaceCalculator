import React, {ReactElement} from "react";
import styled from "styled-components";

interface IThirdRowProps {
  buttons?: Array<{text: string; value: string}>;
  onClick: (newText: string) => void;
}

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

const ThirdRow = ({buttons, onClick}: IThirdRowProps): ReactElement => {
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

export default ThirdRow;
