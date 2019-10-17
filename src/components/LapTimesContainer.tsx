import React from "react";
import styled from "styled-components";

import LapTimesTime from "./LapTimesTime";

interface ILapTimesContainerProps {
  times: Array<{distance: string; time: string; renderAlways?: boolean}>;
}

const StyledLapTimesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LapTimesContainer = ({times}: ILapTimesContainerProps) => {
  return (
    <StyledLapTimesContainer>
      {times.map((t, i) => (
        <LapTimesTime
          key={i}
          distance={t.distance}
          time={t.time}
          index={i + 1}
        />
      ))}
    </StyledLapTimesContainer>
  );
};

export default LapTimesContainer;
