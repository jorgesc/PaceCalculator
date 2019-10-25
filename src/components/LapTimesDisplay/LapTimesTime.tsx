import React, {useState, useEffect} from "react";
import styled from "styled-components";

interface ILabelProps {
  label?: string;
  showInCondensedMode: boolean;
}

interface ITimeProps {
  time?: string;
}

interface ILapTimesTimeProps extends ILabelProps, ITimeProps {
  condensedCheckboxChecked: boolean;
  index: number;
}

const StyledLapTimesTime = styled.div<{hidden: boolean; index: number}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: baseline;
  overflow: hidden;

  transition: all 0.1s linear
    ${props => `${props.index * 0.1 - 0.1 * Math.floor(props.index / 5)}s`};
  max-height: ${props => (props.hidden ? "0px" : "600px")};
  margin-bottom: ${props => (props.hidden ? "0px" : "48px")};
  transform: scaleY(${props => (props.hidden ? "0" : "1")});
  transform-origin: top;
  opacity: ${props => (props.hidden ? "0" : "1")};
`;

const StyledLabel = styled.div<ILabelProps>`
  font-family: Lato;
  font-size: ${props => (props.showInCondensedMode ? "1.05em" : "0.85em")};
  font-weight: ${props => (props.showInCondensedMode ? "bold" : "normal")};
  margin-right: 52px;
  flex: 1;
  text-align: right;
`;

const StyledTime = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-size: 2.5em;
  display: flex;
  flex-direction: row;
  flex: 2;
`;

const LapTimesTime = ({
  label,
  time,
  showInCondensedMode,
  condensedCheckboxChecked,
  index,
}: ILapTimesTimeProps): React.ReactElement => {
  return (
    <StyledLapTimesTime
      index={index}
      hidden={!showInCondensedMode && condensedCheckboxChecked}>
      <StyledLabel showInCondensedMode={showInCondensedMode}>
        {label || "km x"}
      </StyledLabel>
      <StyledTime> {time ? time : "--:--:--"} </StyledTime>
    </StyledLapTimesTime>
  );
};

export default LapTimesTime;
