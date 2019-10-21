import React from "react";
import styled from "styled-components";

import LapTimesTime from "./LapTimesTime";

export type ILapTimesArray = null | Array<{
  label: string;
  time: string;
  renderAlways?: boolean;
}>;

interface ILapTimesContainerProps {
  times?: ILapTimesArray;
}

const StyledLapTimesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LapTimesContainer = ({times}: ILapTimesContainerProps) => {
  const generateContent = () => {
    return times
      ? times.map((t, i) => (
          <LapTimesTime key={i} label={t.label} time={t.time} index={i + 1} />
        ))
      : [...new Array(10)].map((v, i) => (
          <LapTimesTime key={i} label={`km ${i + 1}`} />
        ));
  };

  return <StyledLapTimesContainer>{generateContent()}</StyledLapTimesContainer>;
};

export default LapTimesContainer;
