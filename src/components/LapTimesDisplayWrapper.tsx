import React from "react";
import LapTimesDisplay from "./LapTimesDisplay/LapTimesDisplay";

const LapTimesDisplayWrapper = () => {
  return (
    <LapTimesDisplay
      times={[
        {label: "km 1", time: "02:11:12"},
        {label: "km 2", time: "02:15:12"},
        {label: "km 3", time: "02:15:12"},
        {label: "km 4", time: "02:15:12"},
        {label: "km 5", time: "02:15:12"},
        {label: "km 6", time: "02:15:12"},
        {label: "km 7", time: "02:15:12"},
        {label: "km 8", time: "02:15:12"},
      ]}
    />
  );
};

export default LapTimesDisplayWrapper;
