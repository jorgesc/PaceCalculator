import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Digit from "./Digit";

interface ILapTimesTimeProps {
  label?: string;
  time?: string;
  animationTime?: number;
}

const StyledLapTimesTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: baseline;
  margin-bottom: 48px;
`;

const StyledLabel = styled.div`
  font-family: Lato;
  font-size: 0.75em;
  margin-right: 32px;
`;

const StyledTime = styled.div`
  font-family: "Digital";
  font-weight: 400;
  font-size: 2.5em;
  display: flex;
  flex-direction: row;
`;

const LapTimesTime = ({
  label,
  time,
  animationTime,
}: ILapTimesTimeProps): React.ReactElement => {
  const generateTime = () => {
    if (!time) return "--:--:--";
    return Array.from(time).map((curr, i) => (
      <Digit
        value={curr}
        animationTime={curr === ":" ? 0 : animationTime}
        key={i}
      />
    ));
  };

  return (
    <StyledLapTimesTime>
      <StyledLabel>{label || "km x"}</StyledLabel>
      <StyledTime> {generateTime()} </StyledTime>
    </StyledLapTimesTime>
  );
};

export default LapTimesTime;
