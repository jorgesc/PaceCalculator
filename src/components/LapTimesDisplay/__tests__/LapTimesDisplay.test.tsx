import React from "react";
import thunk from "redux-thunk";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore, {MockStoreCreator, MockStore} from "redux-mock-store";
import RunningSport from "../../../models/RunningSport";
import CyclingSport from "../../../models/CyclingSport";

import {Provider} from "react-redux";
import {IState} from "../../../redux/initialState";
import {
  updateInputFieldDistance,
  updateInputFieldTime,
  updateInputFieldRythm,
} from "../../../redux/actionCreators";

import InputFieldsWrapper from "../../InputFieldsWrapper";
import InputField from "../../InputField";

Enzyme.configure({adapter: new Adapter()});

import LapTimesTime from "../LapTimesTime";
import LapTimesDisplay from "../";
import LapTimesHeader from "../LapTimesHeader";
import Checkbox, {IControlledCheckboxProps} from "../../Checkbox";
import ActionButton from "../../ActionButton";

describe("LapTimesComponent", () => {
  it("LapTimesTime shows correct text", () => {
    const wrapper = mount(
      <LapTimesTime
        label="km 4"
        time="00:23:44"
        index={1}
        condensedCheckboxChecked={false}
        showInCondensedMode={false}
      />,
    );
    expect(wrapper.text().trim()).toEqual("km 4 00:23:44");
  });

  it("LapTimesTime shows correct text when time is empty", () => {
    const wrapper = mount(
      <LapTimesTime
        index={1}
        condensedCheckboxChecked={false}
        showInCondensedMode={false}
      />,
    );
    expect(wrapper.text().trim()).toEqual("km x --:--:--");
  });
});

describe("LapTimes Container", () => {
  it("Contains as many LapTimesTime element as elements in input array", () => {
    const times = [
      {label: "km1", time: "12:12:12", showInCondensedMode: false},
      {label: "km2", time: "14:14:14", showInCondensedMode: false},
      {label: "km3", time: "16:16:16", showInCondensedMode: false},
      {label: "km4", time: "18:18:18", showInCondensedMode: false},
    ];
    const wrapper = mount(
      <LapTimesDisplay
        lapTimes={times}
        condensedCheckboxChecked={false}
        condensedCheckboxClicked={() => null}
        resetButtonClicked={() => null}
      />,
    );
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
  });

  it("When times is null, it displays 10 empty elements", () => {
    const wrapper = mount(
      <LapTimesDisplay
        lapTimes={null}
        condensedCheckboxChecked={false}
        condensedCheckboxClicked={() => null}
        resetButtonClicked={() => null}
      />,
    );
    const timesWrapper = wrapper.find(LapTimesTime);
    expect(timesWrapper).toHaveLength(10);
    for (let i = 0; i < timesWrapper.length; i++) {
      expect(timesWrapper.at(i).text()).toEqual(`km ${i + 1} --:--:-- `);
    }
  });
});

describe("LapTimesHeader", () => {
  it("Pass correctly the condensedCheckboxChecked prop", () => {
    const wrapper = mount(
      <LapTimesDisplay
        condensedCheckboxChecked={true}
        condensedCheckboxClicked={() => null}
        resetButtonClicked={() => null}
      />,
    );

    expect(
      (wrapper.find(Checkbox).props() as IControlledCheckboxProps).value,
    ).toEqual(true);

    const wrapper2 = mount(
      <LapTimesHeader
        condensedCheckboxChecked={false}
        condensedCheckboxClicked={() => null}
        resetButtonClicked={() => null}
      />,
    );

    expect(
      (wrapper2.find(Checkbox).props() as IControlledCheckboxProps).value,
    ).toEqual(false);
  });

  it("Clicking on condensed checkbox calls the right action", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <LapTimesDisplay
        condensedCheckboxChecked={true}
        condensedCheckboxClicked={onClick}
        resetButtonClicked={() => null}
      />,
    );

    wrapper.find(Checkbox).simulate("click");

    expect(onClick.mock.calls).toHaveLength(1);
  });

  it("Clicking on reset button calls the right action", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <LapTimesDisplay
        condensedCheckboxChecked={true}
        condensedCheckboxClicked={() => null}
        resetButtonClicked={onClick}
      />,
    );

    wrapper.find(ActionButton).simulate("click");

    expect(onClick.mock.calls).toHaveLength(1);
  });
});
