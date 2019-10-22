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
import LapTimesDisplay from "../LapTimesDisplay";

describe("LapTimesComponent", () => {
  it("LapTimesTime shows correct text", () => {
    const wrapper = mount(<LapTimesTime label="km 4" time="00:23:44" />);
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
      {label: "km1", time: "12:12:12"},
      {label: "km2", time: "14:14:14"},
      {label: "km3", time: "16:16:16"},
      {label: "km4", time: "18:18:18"},
    ];
    const wrapper = mount(<LapTimesDisplay times={times} />);
    const timesWrapper = wrapper.find(LapTimesTime);
    expect(timesWrapper).toHaveLength(times.length);
    expect(timesWrapper.at(0).props().label).toEqual("km1");
    expect(timesWrapper.at(1).props().label).toEqual("km2");
    expect(timesWrapper.at(2).props().label).toEqual("km3");
    expect(timesWrapper.at(3).props().label).toEqual("km4");

    expect(timesWrapper.at(0).props().time).toEqual("12:12:12");
    expect(timesWrapper.at(1).props().time).toEqual("14:14:14");
    expect(timesWrapper.at(2).props().time).toEqual("16:16:16");
    expect(timesWrapper.at(3).props().time).toEqual("18:18:18");

    expect(timesWrapper.at(0).props().animationTime).toEqual(1);
    expect(timesWrapper.at(1).props().animationTime).toEqual(2);
    expect(timesWrapper.at(2).props().animationTime).toEqual(3);
    expect(timesWrapper.at(3).props().animationTime).toEqual(4);
  });

  it("When times is null, it displays 10 empty elements", () => {
    const wrapper = mount(<LapTimesDisplay times={null} />);
    const timesWrapper = wrapper.find(LapTimesTime);
    expect(timesWrapper).toHaveLength(10);
    for (let i = 0; i < timesWrapper.length; i++) {
      expect(timesWrapper.at(i).text()).toEqual(`km ${i + 1} --:--:-- `);
    }
  });
});