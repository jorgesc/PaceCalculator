import React, {useState, useEffect} from "react";
import styled from "styled-components";

interface ILabelProps {
  label?: string;
  showInCondensedMode: boolean;
}

interface ITimeProps {
  time?: string;
}

interface ILapTimesTimeProps extends ILabelProps, ITimeProps {}

const StyledLapTimesTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: baseline;
  margin-bottom: 48px;
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
}: ILapTimesTimeProps): React.ReactElement => {
  return (
    <StyledLapTimesTime>
      <StyledLabel showInCondensedMode={showInCondensedMode}>
        {label || "km x"}
      </StyledLabel>
      <StyledTime> {time ? time : "--:--:--"} </StyledTime>
    </StyledLapTimesTime>
  );
};

export default LapTimesTime;
