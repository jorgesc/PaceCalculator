export default abstract class Sport {
  public abstract name: string;
  public abstract units: string;
  public abstract rythmPlaceholder: string;
  public abstract icon: string;
  public abstract showRythm: (distance: number, totalTime: string) => string;
  public abstract showTotalTime: (distance: number, rythm: string) => string;
  public abstract cleanInputRythm: (
    newValue: string,
    oldValue: string,
  ) => string;

  public cleanInputTime = (newValue: string, oldValue: string): string => {
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
}
