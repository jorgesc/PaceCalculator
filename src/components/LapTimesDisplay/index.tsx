import React from "react";
import styled from "styled-components";

import LapTimesTime from "./LapTimesTime";
import LapTimesHeader from "./LapTimesHeader";

export type ILapTimesArray = null | Array<{
  label: string;
  time: string;
  showInCondensedMode: boolean;
}>;

export interface ILapTimesDisplayProps {
  lapTimes?: ILapTimesArray;
  condensedCheckboxChecked: boolean;
  condensedCheckboxClicked: () => void;
  resetButtonClicked: () => void;
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

const LapTimesContainer = (
  props: ILapTimesDisplayProps,
): React.ReactElement => {
  const {lapTimes, condensedCheckboxChecked, ...headerProps} = props;

  const generateEmptyContent = () => {
    return [...new Array(10)].map((v, i) => (
      <LapTimesTime
        key={i}
        index={i}
        label={`km ${i + 1}`}
        showInCondensedMode={false}
        condensedCheckboxChecked={condensedCheckboxChecked}
      />
    ));
  };

  const generateRealContent = () => {
    if (!lapTimes) throw new Error("times has to be defined!");
    return lapTimes.map((t, i) => (
      <LapTimesTime
        key={i}
        index={i}
        {...t}
        condensedCheckboxChecked={condensedCheckboxChecked}
      />
    ));
  };

  return (
    <div>
      <LapTimesHeader
        {...headerProps}
        condensedCheckboxChecked={condensedCheckboxChecked}
      />
      <StyledLapTimesContainer empty={!lapTimes}>
        {lapTimes ? generateRealContent() : generateEmptyContent()}
      </StyledLapTimesContainer>
    </div>
  );
};

export default LapTimesContainer;
