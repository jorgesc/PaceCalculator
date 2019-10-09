export const HHMMSSToSeconds = (time: string): number => {
  const splittedValues = time.trim().split(":");
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

export const timeInputFieldCleaner = (
  newValue: string,
  oldValue: string,
): string => {
  const pattern = /^\d?(\d(:([0-5](\d(:([0-5](\d)?)?)?)?)?)?)?$/;
  if (!pattern.test(newValue)) return oldValue;
  if (
    /^\d{2}$/.test(newValue.slice(-2)) &&
    newValue.length > oldValue.length &&
    (newValue.match(/:/g) || []).length < 2
  ) {
    return newValue + ":";
  }
  return newValue;
};
