export default interface ISport {
  name: string;
  units: string;
  showRythm: (distance: number, totalTime: string) => string;
  showTotalTime: (distance: number, rythm: string) => string;
}
