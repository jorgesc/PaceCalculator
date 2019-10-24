import {appReducer} from "../reducers";
import {IStateAppReducer} from "../initialState";

import {
  changeSelectedSportAction,
  updateInputFieldDistance,
  updateInputFieldTime,
  updateInputFieldRythm,
  updateLapTimes,
  updateCondensedCheckboxChecked,
} from "../actionCreators";

import RunningSport from "../../models/RunningSport";
import CyclingSport from "../../models/CyclingSport";

describe("appReducer", () => {
  it("Changes selected sport", () => {
    const initialState: IStateAppReducer = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "",
      timeFieldValue: "",
      rythmFieldValue: "",
      lapTimes: null,
      condensedCheckboxChecked: false,
    };

    const finalState = {...initialState, selectedSport: 2};

    expect(appReducer(initialState, changeSelectedSportAction(2))).toEqual(
      finalState,
    );
  });

  it("Updates Distance input field", () => {
    const initialState: IStateAppReducer = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "he",
      timeFieldValue: "",
      rythmFieldValue: "",
      lapTimes: null,
      condensedCheckboxChecked: false,
    };

    const finalState = {...initialState, distanceFieldValue: "54634351"};
    expect(
      appReducer(initialState, updateInputFieldDistance("54634351")),
    ).toEqual(finalState);
  });

  it("Only passes numbers on Distance input field updates", () => {
    const initialState: IStateAppReducer = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "543",
      timeFieldValue: "",
      rythmFieldValue: "",
      lapTimes: null,
      condensedCheckboxChecked: false,
    };

    const finalState = {...initialState, distanceFieldValue: "246897"};
    expect(
      appReducer(initialState, updateInputFieldDistance("24n6k8hne9,.-ñ7&")),
    ).toEqual(finalState);
  });

  it("Updates Time input field", () => {
    const initialState: IStateAppReducer = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "543",
      timeFieldValue: "",
      rythmFieldValue: "",
      lapTimes: null,
      condensedCheckboxChecked: false,
    };

    const finalState = {...initialState, timeFieldValue: "02:44:32"};
    expect(appReducer(initialState, updateInputFieldTime("02:44:32"))).toEqual(
      finalState,
    );
  });

  it("Updates Rythm input field", () => {
    const initialState: IStateAppReducer = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "543",
      timeFieldValue: "",
      lapTimes: null,
      rythmFieldValue: "",
      condensedCheckboxChecked: false,
    };

    const finalState = {...initialState, rythmFieldValue: "02:32"};
    expect(appReducer(initialState, updateInputFieldRythm("02:32"))).toEqual(
      finalState,
    );
  });

  it("Updates lapTimes", () => {
    const initialState: IStateAppReducer = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "543",
      timeFieldValue: "",
      lapTimes: null,
      rythmFieldValue: "",
      condensedCheckboxChecked: false,
    };

    const myLapTimes = [
      {label: "km 1", time: "01:55:03"},
      {label: "km 2", time: "02:43:43"},
      {label: "km 3", time: "03:38:40"},
      {label: "km 4", time: "04:16:42"},
      {label: "km 5", time: "05:25:19"},
    ];

    const finalState = {...initialState, lapTimes: myLapTimes};
    expect(appReducer(initialState, updateLapTimes(myLapTimes))).toEqual(
      finalState,
    );
  });

  it("Updates condensedCheckbox", () => {
    let initialState: IStateAppReducer = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "543",
      timeFieldValue: "",
      lapTimes: null,
      rythmFieldValue: "",
      condensedCheckboxChecked: false,
    };

    let finalState = {...initialState, condensedCheckboxChecked: true};
    expect(
      appReducer(initialState, updateCondensedCheckboxChecked(true)),
    ).toEqual(finalState);

    initialState = {...initialState, condensedCheckboxChecked: true};
    finalState = {...initialState, condensedCheckboxChecked: false};
    expect(
      appReducer(initialState, updateCondensedCheckboxChecked(false)),
    ).toEqual(finalState);
  });
});
