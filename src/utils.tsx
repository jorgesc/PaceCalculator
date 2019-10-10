export const HHMMSSToSeconds = (
  time: string,
  withHour: boolean = true,
): number => {
  if (!time) return 0;
  const splittedValues = time
    .trim()
    .split(":")
    .map((v: string, i: number): string => (i > 0 ? v.padEnd(2, "0") : v));

  while (splittedValues.length < (withHour ? 3 : 2)) {
    splittedValues.push("0");
  }

  return splittedValues
    .reverse()
    .reduce((acc: number, v: string, i: number) => {
      acc += parseInt(v, 10) * 60 ** i;
      return acc;
    }, 0);
};

export const secondsToHHMMSS = (
  s: number,
  withHours: boolean = true,
): string => {
  const output = [];
  let rem = s;
  const steps = withHours ? 2 : 1;

  for (let i = steps; i >= 0; i--) {
    output.push(Math.floor(rem / 60 ** i));
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
