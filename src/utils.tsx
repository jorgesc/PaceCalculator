const arrayPad = <T extends unknown>(a: T[], len: number, pad: T): T[] => {
  while (a.length < len) a.push(pad);
  return [...a];
};

const HMSToNumberArray = (hhmmss: string): number[] => {
  const padElement = (v: string, i: number): string => {
    return i > 0 ? v.padEnd(2, "0") : v;
  };
  const parts = hhmmss.trim().split(":");
  const fixed = parts.map(padElement);
  return fixed.map(x => parseInt(x, 10));
};

const addWeightedValue = (
  acc: number,
  v: number,
  i: number,
  arr: number[],
): number => {
  acc += v * 60 ** (arr.length - i - 1);
  return acc;
};

export const HHMMSSToSeconds = (
  time: string,
  withHour: boolean = true,
): number => {
  const splitted = HMSToNumberArray(time);
  const completedArray = arrayPad<number>(splitted, withHour ? 3 : 2, 0);
  return completedArray.reduce(addWeightedValue, 0);
};

export const secondsToHHMMSS = (
  s: number,
  withHours: boolean = true,
): string => {
  const output = [];
  let rem = s;
  const steps = withHours ? 2 : 1;

  for (let i = steps; i >= 0; i--) {
    const val = rem / 60 ** i;
    output.push(i !== 0 ? Math.floor(val) : Math.round(val));
    rem = rem % 60 ** i;
  }

  return output.map(x => x.toString().padStart(2, "0")).join(":");
};

export const addColonAfterTwoNumbers = (
  newValue: string,
  oldValue: string,
  blocks: number = 2,
): string => {
  let output = newValue;
  if (
    /\d{2}$/.test(output) &&
    output.length > oldValue.length &&
    (output.match(/:/g) || []).length < blocks
  ) {
    output = output + ":";
  }

  return output;
};

export const addColonBetweenThreeNumbers = (newValue: string): string => {
  let output = newValue;
  if (/\d{3}$/.test(output)) {
    output = newValue.slice(0, -1) + ":" + newValue.slice(-1);
  }
  return output;
};
