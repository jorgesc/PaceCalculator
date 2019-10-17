import React, {useState, useEffect} from "react";
import styled from "styled-components";

interface ILapTimesTimeProps {
  distance?: string;
  time?: string;
  index?: number;
}

const StyledLapTimesTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: baseline;
  margin-bottom: 32px;
`;

const StyledDistance = styled.div`
  font-family: Lato;
  margin-right: 32px;
`;

const StyledTime = styled.div`
  font-family: "Digital";
  font-weight: 400;
  font-size: 2.5em;
  display: flex;
  flex-direction: row;
`;

const StyledDiv = styled.div`
  font-family: Digital;
`;

const randInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const Digit = ({value, delay}: {value: string; delay?: number}) => {
  const initialState: string[] = [];
  const [valuesToShow, setValuesToShow] = useState(initialState);

  useEffect(() => {
    const arrLength = delay ? delay * 2 + randInt(5) : 0;
    const newArr = Array.from({length: arrLength}, () =>
      randInt(10).toString(),
    );
    newArr.push(value);
    setValuesToShow(newArr);
  }, [value]);

  useEffect(() => {
    if (valuesToShow.length <= 1) return;
    setTimeout(() => {
      setValuesToShow(valuesToShow.slice(1));
    }, 100 + randInt(50));
  });

  return <StyledDiv>{valuesToShow[0]}</StyledDiv>;
};

const LapTimesTime = ({distance, time, index}: ILapTimesTimeProps) => {
  const generateTime = () => {
    if (!time) return "--:--:--";
    return time.split("").map((curr, i) => {
      if (curr === ":") return <StyledDiv key={i}>:</StyledDiv>;
      return <Digit value={curr} delay={index} key={i} />;
    });
  };

  return (
    <StyledLapTimesTime>
      <StyledDistance>{distance || "km x"}</StyledDistance>
      <StyledTime> {generateTime()} </StyledTime>
    </StyledLapTimesTime>
  );
};

export default LapTimesTime;
