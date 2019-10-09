export default interface ISport {
  name: string;
  units: string;
  rythmPlaceholder: string;
  icon: string;
  showRythm: (distance: number, totalTime: string) => string;
  showTotalTime: (distance: number, rythm: string) => string;
  cleanInputRythm: (newValue: string, oldValue: string) => string;
}
