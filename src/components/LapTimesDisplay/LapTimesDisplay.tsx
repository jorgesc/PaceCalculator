import React from "react";
import styled from "styled-components";

import LapTimesTime from "./LapTimesTime";

export type ILapTimesArray = null | Array<{
  label: string;
  time: string;
  renderAlways?: boolean;
}>;

export interface ILapTimesDisplayProps {
  times?: ILapTimesArray;
}

interface IStyledLapTimesContainerProps {
  empty: boolean;
}

const StyledLapTimesContainer = styled.div<IStyledLapTimesContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => (props.empty ? "lightgray" : "black")};
  margin-top: 32px;
  transition: color 0.5s linear;
`;

const LapTimesContainer = ({
  times,
}: ILapTimesDisplayProps): React.ReactElement => {
  const generateEmptyContent = () => {
    return [...new Array(10)].map((v, i) => (
      <LapTimesTime key={i} label={`km ${i + 1}`} />
    ));
  };

  const generateRealContent = () => {
    if (!times) throw new Error("times has to be defined!");
    return times.map((t, i) => (
      <LapTimesTime
        key={i}
        label={t.label}
        time={t.time}
        animationTime={i + 1}
      />
    ));
  };

  return (
    <StyledLapTimesContainer empty={!times}>
      {times ? generateRealContent() : generateEmptyContent()}
    </StyledLapTimesContainer>
  );
};

export default LapTimesContainer;
