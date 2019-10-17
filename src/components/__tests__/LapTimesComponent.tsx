import React from "react";
import thunk from "redux-thunk";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore, {MockStoreCreator, MockStore} from "redux-mock-store";
import RunningSport from "../../models/RunningSport";
import CyclingSport from "../../models/CyclingSport";

import {Provider} from "react-redux";
import {IState} from "../../redux/store";
import {
  updateInputFieldDistance,
  updateInputFieldTime,
  updateInputFieldRythm,
} from "../../redux/actionCreators";

import InputFieldsWrapper from "../InputFieldsWrapper";
import InputField from "../InputField/InputField";

Enzyme.configure({adapter: new Adapter()});

import LapTimesTime from "../LapTimesTime";
import LapTimesContainer from "../LapTimesContainer";

describe("LapTimesComponent", () => {
  it("LapTimesTime shows correct text", () => {
    const wrapper = mount(<LapTimesTime distance="km 4" time="00:23:44" />);
    expect(wrapper.text().trim()).toEqual("km 4 00:23:44");
  });

  it("LapTimesTime shows correct text when time is empty", () => {
    const wrapper = mount(<LapTimesTime />);
    expect(wrapper.text().trim()).toEqual("km x --:--:--");
  });
});

describe("LapTimes Container", () => {
  it("Contains as many LapTimesTime element as elements in input array", () => {
    const times = [
      {distance: "km1", time: "12:12:12"},
      {distance: "km2", time: "14:14:14"},
      {distance: "km3", time: "16:16:16"},
      {distance: "km4", time: "18:18:18"},
    ];
    const wrapper = mount(<LapTimesContainer times={times} />);
    const timesWrapper = wrapper.find(LapTimesTime);
    expect(timesWrapper).toHaveLength(times.length);
    expect(timesWrapper.at(0).props().distance).toEqual("km1");
    expect(timesWrapper.at(1).props().distance).toEqual("km2");
    expect(timesWrapper.at(2).props().distance).toEqual("km3");
    expect(timesWrapper.at(3).props().distance).toEqual("km4");

    expect(timesWrapper.at(0).props().time).toEqual("12:12:12");
    expect(timesWrapper.at(1).props().time).toEqual("14:14:14");
    expect(timesWrapper.at(2).props().time).toEqual("16:16:16");
    expect(timesWrapper.at(3).props().time).toEqual("18:18:18");

    expect(timesWrapper.at(0).props().index).toEqual(1);
    expect(timesWrapper.at(1).props().index).toEqual(2);
    expect(timesWrapper.at(2).props().index).toEqual(3);
    expect(timesWrapper.at(3).props().index).toEqual(4);
  });
});
