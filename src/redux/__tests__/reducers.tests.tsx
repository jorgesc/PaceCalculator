import {appReducer, IAppState} from "../reducers";

import {changeSelectedSportAction} from "../actions";

import RunningSport from "../../models/RunningSport";
import CyclingSport from "../../models/CyclingSport";

describe("appReducer", () => {
  it("Changes selected sport", () => {
    const initialState: IAppState = {
      selectedSport: 0,
      sports: [RunningSport, CyclingSport],
    };

    const finalState = {...initialState, selectedSport: 2};

    expect(appReducer(initialState, changeSelectedSportAction(2))).toEqual(
      finalState,
    );
  });
});
