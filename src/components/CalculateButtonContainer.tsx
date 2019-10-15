import React from "react";
import styled from "styled-components";

import CalculateButton from "./CalculateButton";

const StyledCalculateButtonContainer = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CalculateButtonContainer = () => {
  return (
    <StyledCalculateButtonContainer>
      <p>
        Introduce todos los datos en el formulario anterior y pulsa este botón
        para ver aquí tus tiempos de paso
      </p>
      <CalculateButton />
    </StyledCalculateButtonContainer>
  );
};

export default CalculateButtonContainer;
