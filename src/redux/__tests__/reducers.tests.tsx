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

    const finalState = {...initialState, distanceFieldValue: "hello world"};
    expect(
      appReducer(initialState, updateInputFieldDistance("hello world")),
    ).toEqual(finalState);
  });
});
