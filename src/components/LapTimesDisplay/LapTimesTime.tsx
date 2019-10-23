import React, {useState, useEffect} from "react";
import styled from "styled-components";

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
  font-size: 0.85em;
  margin-right: 52px;
`;

const StyledTime = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: 2.5em;
  display: flex;
  flex-direction: row;
`;

const LapTimesTime = ({
  label,
  time,
  animationTime,
}: ILapTimesTimeProps): React.ReactElement => {
  return (
    <StyledLapTimesTime>
      <StyledLabel>{label || "km x"}</StyledLabel>
      <StyledTime> {time ? time : "--:--:--"} </StyledTime>
    </StyledLapTimesTime>
  );
};

export default LapTimesTime;
