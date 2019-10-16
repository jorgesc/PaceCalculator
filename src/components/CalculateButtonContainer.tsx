import React from "react";
import styled from "styled-components";

import CalculateButton from "./CalculateButton";

interface ICalculateButtonContainerProps {
  hidden?: boolean;
}

const StyledCalculateButtonContainer = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  position: absolute;

  left: ${(props: ICalculateButtonContainerProps): string =>
    props.hidden ? "120%" : "0"};
  opacity: ${(props: ICalculateButtonContainerProps): string =>
    props.hidden ? "0" : "1"};
  transition: left 0.5s ease-in 0.1s, opacity 0.4s ease-in 0.1s;
`;

const CalculateButtonContainer = ({hidden}: ICalculateButtonContainerProps) => {
  return (
    <StyledCalculateButtonContainer hidden={hidden}>
      <p>
        Introduce todos los datos en el formulario anterior y pulsa este botón
        para ver aquí tus tiempos de paso
      </p>
      <CalculateButton />
    </StyledCalculateButtonContainer>
  );
};

export default CalculateButtonContainer;
