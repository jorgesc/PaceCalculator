import {secondsToHHMMSS} from "./formattingUtils";
import {ILapTimesArray} from "../components/LapTimesDisplay/LapTimesDisplay";

interface INumberKeyed {
  [key: number]: string;
}

interface ICustomDistance {
  label: string;
  distance: string;
}

function sortStringArrayNumerically(arr: string[]): number[] {
  return arr.map(x => parseInt(x, 10)).sort((a, b) => a - b);
}

function createCustomDistancesHashmap(
  customDistances: ICustomDistance[],
): INumberKeyed {
  return customDistances.reduce((acc: INumberKeyed, curr: ICustomDistance) => {
    acc[parseInt(curr.distance, 10)] = curr.label;
    return acc;
  }, {});
}

function createDefaultDistancesHashmap(len: number): INumberKeyed {
  const steps = [...new Array(len)].map((_, i) => (i + 1) * 1000);
  return steps.reduce((acc: INumberKeyed, curr: number, i: number) => {
    acc[curr] = `km ${i + 1}`;
    return acc;
  }, {});
}

function generateItem(
  label: string,
  time: string,
  showInCondensedMode: boolean,
) {
  return {label, time, showInCondensedMode};
}

function shouldShowInCondensed(
  k: number,
  customDistancesValues: number[],
): boolean {
  return k % 5000 === 0 || customDistancesValues.includes(k);
}

export const calculateLapTimes = (
  distance: number,
  time: number,
  customDistances: ICustomDistance[] = [],
): ILapTimesArray => {
  const speed = distance / time;
  const numberOfSteps = Math.floor(distance / 1000);

  const myHashMap: INumberKeyed = {};
  const customDistancesHashmap = createCustomDistancesHashmap(customDistances);
  Object.assign(myHashMap, customDistancesHashmap);
  Object.assign(myHashMap, createDefaultDistancesHashmap(numberOfSteps));

  const keys = sortStringArrayNumerically(Object.keys(myHashMap));

  const customDistancesValues = Object.keys(customDistancesHashmap).map(x =>
    parseInt(x, 10),
  );
  return keys.map(k => {
    const t = secondsToHHMMSS(k / speed);
    const showInCondensed = shouldShowInCondensed(k, customDistancesValues);
    return generateItem(myHashMap[k], t, showInCondensed);
  });
};
