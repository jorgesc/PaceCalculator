import React from "react";
import styled from "styled-components";

import LapTimesTime from "./LapTimesTime";
import LapTimesHeader from "./LapTimesHeader";

export type ILapTimesArray = null | Array<{
  label: string;
  time: string;
  renderAlways?: boolean;
}>;

export interface ILapTimesDisplayProps {
  lapTimes?: ILapTimesArray;
  condensedCheckboxChecked: boolean;
  condensedCheckboxClicked: () => void;
  lapTimesHeaderText: string;
  resetButtonClicked: () => void;
}

interface IStyledLapTimesContainerProps {
  empty: boolean;
}

const headerText =
  "Aquí puedes ver los tiempos de paso estimados por cada punto kilométrico";

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

const LapTimesContainer = (
  props: ILapTimesDisplayProps,
): React.ReactElement => {
  const {lapTimes, ...headerProps} = props;

  const generateEmptyContent = () => {
    return [...new Array(10)].map((v, i) => (
      <LapTimesTime key={i} label={`km ${i + 1}`} />
    ));
  };

  const generateRealContent = () => {
    if (!lapTimes) throw new Error("times has to be defined!");
    return lapTimes.map((t, i) => (
      <LapTimesTime
        key={i}
        label={t.label}
        time={t.time}
        animationTime={i + 1}
      />
    ));
  };

  return (
    <div>
      <LapTimesHeader lapTimesHeaderText={headerText} {...headerProps} />
      <StyledLapTimesContainer empty={!lapTimes}>
        {lapTimes ? generateRealContent() : generateEmptyContent()}
      </StyledLapTimesContainer>
    </div>
  );
};

export default LapTimesContainer;
