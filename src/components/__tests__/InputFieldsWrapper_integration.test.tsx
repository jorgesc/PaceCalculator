import React from "react";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore, {MockStoreCreator} from "redux-mock-store";
import RunningSport from "../../models/RunningSport";
import CyclingSport from "../../models/CyclingSport";

import {Provider} from "react-redux";
import {IState} from "../../redux/store";
import {updateInputFieldDistance} from "../../redux/actions";

import InputFieldsWrapper from "../InputFieldsWrapper";
import InputField from "../InputField/InputField";

Enzyme.configure({adapter: new Adapter()});

describe("InputFieldsWrapper", () => {
  let mockStoreCreator: MockStoreCreator;
  let initialState: IState;

  beforeAll(() => {
    mockStoreCreator = configureStore([]);
    initialState = {
      app: {
        sports: [CyclingSport, RunningSport, CyclingSport],
        selectedSport: 0,
        distanceFieldValue: "testTesTTest",
        timeFieldValue: "",
        rythmFieldValue: "",
      },
    };
  });

  it("Shows the correct rythm units", () => {
    const store = mockStoreCreator(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const rythmFieldWrapper = wrapper.find(InputField).at(2);
    expect(rythmFieldWrapper.text()).toContain(CyclingSport.units);
  });

  it("Shows the correct rythm placeholder", () => {
    const store = mockStoreCreator(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const rythmFieldWrapper = wrapper.find(InputField).at(2);
    expect(rythmFieldWrapper.find("input").props().placeholder).toEqual(
      CyclingSport.rythmPlaceholder,
    );
  });

  it("Distance field contains store value", () => {
    const store = mockStoreCreator(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const distanceFieldWrapper = wrapper.find(InputField).at(0);
    expect(distanceFieldWrapper.props().value).toEqual("testTesTTest");
  });

  it("Changing distance calls update distance action", () => {
    const store = mockStoreCreator(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const distanceFieldWrapper = wrapper.find(InputField).at(0);
    distanceFieldWrapper
      .find("input")
      .simulate("change", {target: {value: "38432"}});

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(updateInputFieldDistance("38432"));
  });
});
