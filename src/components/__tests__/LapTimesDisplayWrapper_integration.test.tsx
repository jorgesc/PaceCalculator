import React from "react";
import thunk from "redux-thunk";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore, {MockStoreCreator, MockStore} from "redux-mock-store";
import RunningSport from "../../models/RunningSport";
import CyclingSport from "../../models/CyclingSport";

import {Provider} from "react-redux";
import {IState} from "../../redux/initialState";
import {
  updateInputFieldDistance,
  updateInputFieldTime,
  updateInputFieldRythm,
  updateLapTimes,
  updateCondensedCheckboxChecked,
} from "../../redux/actionCreators";

import InputFieldsWrapper from "../InputFieldsWrapper";
import InputField from "../InputField/InputField";

Enzyme.configure({adapter: new Adapter()});

import LapTimesDisplayWrapper from "../LapTimesDisplayWrapper";
import LapTimesDisplay from "../LapTimesDisplay/LapTimesDisplay";
import LapTimesTime from "../LapTimesDisplay/LapTimesTime";

import ActionButton from "../ActionButton/ActionButton";
import Checkbox, {IControlledCheckboxProps} from "../Checkbox/Checkbox";

import * as ActionsModule from "../../redux/logicActions";

const myLapTimes = [
  {label: "km 1", time: "02:11:12", showInCondensedMode: false},
  {label: "km 2", time: "03:18:52", showInCondensedMode: false},
  {label: "km 3", time: "04:15:02", showInCondensedMode: false},
  {label: "km 4", time: "05:38:16", showInCondensedMode: false},
  {label: "km 5", time: "12:45:58", showInCondensedMode: true},
  {label: "km 6", time: "13:25:58", showInCondensedMode: false},
  {label: "km 7", time: "14:13:20", showInCondensedMode: false},
  {label: "km 8", time: "15:16:39", showInCondensedMode: false},
];

describe("LapTimesDisplayWrapper", () => {
  let mockStoreCreator: MockStoreCreator;
  let initialState: IState;
  let store: MockStore;
  let wrapper: ReactWrapper;

  beforeEach(() => {
    mockStoreCreator = configureStore([thunk]);
    initialState = {
      app: {
        sports: [CyclingSport, RunningSport, CyclingSport],
        selectedSport: 0,
        distanceFieldValue: "10000",
        timeFieldValue: "44:32:47",
        rythmFieldValue: "12:57",
        lapTimes: myLapTimes,
        condensedCheckboxChecked: true,
      },
    };
    store = mockStoreCreator(initialState);
    wrapper = mount(
      <Provider store={store}>
        <LapTimesDisplayWrapper></LapTimesDisplayWrapper>
      </Provider>,
    );
  });

  it("Gets its state from redux store", () => {
    const displayWrapper = wrapper.find(LapTimesDisplay);
    expect(displayWrapper).toHaveLength(1);
    const lapTimes = displayWrapper.find(LapTimesTime);
    expect(lapTimes).toHaveLength(8);

    for (let i = 0; i < lapTimes.length; i++) {
      expect(lapTimes.at(i).props().label).toEqual(myLapTimes[i].label);
      expect(lapTimes.at(i).props().time).toEqual(myLapTimes[i].time);
    }
  });

  it("Reset button onclick works", () => {
    wrapper.find(ActionButton).simulate("click");
    const actions = store.getActions();
    expect(actions).toHaveLength(5);
    expect(actions[0]).toEqual(updateInputFieldDistance(""));
    expect(actions[1]).toEqual(updateInputFieldTime(""));
    expect(actions[2]).toEqual(updateInputFieldRythm(""));
    expect(actions[3]).toEqual(updateLapTimes(null));
    expect(actions[4]).toEqual(updateCondensedCheckboxChecked(false));
  });

  it("CondensedCheckbox onclick works", () => {
    wrapper.find(Checkbox).simulate("click");
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(updateCondensedCheckboxChecked(false));
  });

  it("Condensed checkbox gets value from state", () => {
    const props = expect(
      (wrapper.find(Checkbox).props() as IControlledCheckboxProps).value,
    ).toBe(true);
  });
});
