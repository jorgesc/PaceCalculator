import {appReducer, IAppState} from "../reducers";

import {changeSelectedSportAction, updateInputFieldDistance} from "../actions";

import RunningSport from "../../models/RunningSport";
import CyclingSport from "../../models/CyclingSport";

describe("appReducer", () => {
  it("Changes selected sport", () => {
    const initialState: IAppState = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "",
      timeFieldValue: "",
      rythmFieldValue: "",
    };

    const finalState = {...initialState, selectedSport: 2};

    expect(appReducer(initialState, changeSelectedSportAction(2))).toEqual(
      finalState,
    );
  });

  it("Updates Distance input field", () => {
    const initialState: IAppState = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "he",
      timeFieldValue: "",
      rythmFieldValue: "",
    };

    const finalState = {...initialState, distanceFieldValue: "54634351"};
    expect(
      appReducer(initialState, updateInputFieldDistance("54634351")),
    ).toEqual(finalState);
  });

  it("Only passes numbers on Distance input field updates", () => {
    const initialState: IAppState = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
      distanceFieldValue: "543",
      timeFieldValue: "",
      rythmFieldValue: "",
    };

    const finalState = {...initialState, distanceFieldValue: "246897"};
    expect(
      appReducer(initialState, updateInputFieldDistance("24n6k8hne9,.-ñ7&")),
    ).toEqual(finalState);
  });
});
