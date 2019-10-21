import React, {useState, useEffect} from "react";
import styled from "styled-components";

interface IDigitProps {
  value: string;
  animationTime?: number;
}

const randInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const StyledDiv = styled.div`
  font-family: Digital;
`;

const Digit = ({value, animationTime}: IDigitProps) => {
  const initialState: string[] = [];
  const [valuesToShow, setValuesToShow] = useState(initialState);

  const genRandomArray = (aTime: number) => {
    const len = aTime * 2 + randInt(5);
    return Array.from({length: len}, () => randInt(10).toString());
  };

  useEffect(() => {
    const arr = animationTime ? genRandomArray(animationTime) : new Array();
    setValuesToShow([...arr, value]);
  }, [value]);

  useEffect(() => {
    if (valuesToShow.length <= 1) return;
    setTimeout(() => {
      setValuesToShow(valuesToShow.slice(1));
    }, 100 + randInt(50));
  });

  return <StyledDiv>{valuesToShow[0]}</StyledDiv>;
};

export default Digit;
