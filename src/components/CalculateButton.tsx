import React from "react";
import styled from "styled-components";

const StyledCalculateButton = styled.button`
  border: none;
  background-color: limegreen;
  padding: 16px 50px 16px 50px;
  border-radius: 5px;
  font-size: 1.4em;
  font-weight: bold;
  color: white;
  font-family: Lato;
  outline: none;

  transition: box-shadow 0.1s ease-out, transform 0.1s ease-out;

  :hover {
    cursor: pointer;
    box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25),
      0px 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.01);
  }
`;

const CalculateButton = () => {
  return (
    <StyledCalculateButton>Calcular Tiempos de Paso</StyledCalculateButton>
  );
};

export default CalculateButton;
