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

import * as ActionsModule from "../../redux/actions";

describe("InputFieldsWrapper", () => {
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
      },
    };
    store = mockStoreCreator(initialState);
    wrapper = mount(
      <Provider store={store}>
        <InputFieldsWrapper />
      </Provider>,
    );
  });

  it("Shows the correct rythm units", () => {
    const rythmFieldWrapper = wrapper.find(InputField).at(2);
    expect(rythmFieldWrapper.text()).toContain(CyclingSport.units);
  });

  it("Shows the correct rythm placeholder", () => {
    const rythmFieldWrapper = wrapper.find(InputField).at(2);
    expect(rythmFieldWrapper.find("input").props().placeholder).toEqual(
      CyclingSport.rythmPlaceholder,
    );
  });

  it("Distance field contains store value", () => {
    const distanceFieldWrapper = wrapper.find(InputField).at(0);
    expect(distanceFieldWrapper.props().value).toEqual("10000");
  });

  it("Changing distance calls update distance action", () => {
    const distanceFieldWrapper = wrapper.find(InputField).at(0);
    distanceFieldWrapper
      .find("input")
      .simulate("change", {target: {value: "38432"}});

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(updateInputFieldDistance("38432"));
  });

  it("Rythm and Time inputs are disabled when Distance is empty", () => {
    const initialState2 = {app: {...initialState.app, distanceFieldValue: ""}};

    const store2 = mockStoreCreator(initialState2);
    const wrapper2 = mount(
      <Provider store={store2}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const distanceFieldWrapper2 = wrapper2.find(InputField).at(0);
    const timeFieldWrapper2 = wrapper2.find(InputField).at(1);
    const rythmFieldWrapper2 = wrapper2.find(InputField).at(2);

    expect(timeFieldWrapper2.find("input").props().disabled).toBe(true);
    expect(rythmFieldWrapper2.find("input").props().disabled).toBe(true);

    const store3 = mockStoreCreator(initialState);
    const wrapper3 = mount(
      <Provider store={store3}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const distanceFieldWrapper = wrapper3.find(InputField).at(0);
    const timeFieldWrapper = wrapper3.find(InputField).at(1);
    const rythmFieldWrapper = wrapper3.find(InputField).at(2);

    expect(timeFieldWrapper.find("input").props().disabled).toBe(false);
    expect(rythmFieldWrapper.find("input").props().disabled).toBe(false);
  });

  it("Time field contains the right store value", () => {
    const timeFieldWrapper = wrapper.find(InputField).at(1);
    expect(timeFieldWrapper.props().value).toEqual("44:32:47");
  });

  it("Changing time also updates rythm with the correct value", () => {
    const spy = jest.spyOn(ActionsModule, "timeInputFieldChanged");

    const myInitialState = {app: {...initialState.app, selectedSport: 1}};
    const myStore = mockStoreCreator(myInitialState);
    const myWrapper = mount(
      <Provider store={myStore}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const timeFieldWrapper = myWrapper.find(InputField).at(1);
    timeFieldWrapper
      .find("input")
      .simulate("change", {target: {value: "02:21:33"}});

    expect(spy.mock.calls).toHaveLength(1);
    expect(spy.mock.calls[0][0]).toEqual("02:21:33");

    spy.mockClear();
  });

  it("Rythm field contains the right store value", () => {
    const rythmFieldWrapper = wrapper.find(InputField).at(2);
    expect(rythmFieldWrapper.props().value).toEqual("12:57");
  });

  it("Changing rythm calls rythmInputFieldChanged with the correct args", () => {
    const spy = jest.spyOn(ActionsModule, "rythmInputFieldChanged");

    const myInitialState = {app: {...initialState.app, selectedSport: 1}};
    const myStore = mockStoreCreator(myInitialState);
    const myWrapper = mount(
      <Provider store={myStore}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const rythmFieldWrapper = myWrapper.find(InputField).at(2);
    rythmFieldWrapper
      .find("input")
      .simulate("change", {target: {value: "21:33"}});

    expect(spy.mock.calls).toHaveLength(1);
    expect(spy.mock.calls[0][0]).toEqual("21:33");

    spy.mockClear();
  });

  it("Time calculations also works for other sports", () => {
    const spy = jest.spyOn(ActionsModule, "timeInputFieldChanged");

    const timeFieldWrapper = wrapper.find(InputField).at(1);
    timeFieldWrapper
      .find("input")
      .simulate("change", {target: {value: "02:21:33"}});

    expect(spy.mock.calls).toHaveLength(1);
    expect(spy.mock.calls[0][0]).toEqual("02:21:33");

    spy.mockClear();
  });

  it("Rythm calculations also works for other sports", () => {
    const spy = jest.spyOn(ActionsModule, "rythmInputFieldChanged");

    const rythmFieldWrapper = wrapper.find(InputField).at(2);
    rythmFieldWrapper
      .find("input")
      .simulate("change", {target: {value: "4.24"}});

    expect(spy.mock.calls).toHaveLength(1);
    expect(spy.mock.calls[0][0]).toEqual("4.24");

    spy.mockClear();
  });

  it("Time onchange cleans the data before updating the state", () => {
    const timeFieldWrapper = wrapper.find(InputField).at(1);
    timeFieldWrapper
      .find("input")
      .simulate("change", {target: {value: "02:21:8"}});

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(updateInputFieldTime("44:32:47"));
  });

  it("Rythm onchange cleans the data before updating the state", () => {
    const myInitialState = {
      app: {...initialState.app, selectedSport: 1, rythmFieldValue: "0"},
    };
    const myStore = mockStoreCreator(myInitialState);
    const myWrapper = mount(
      <Provider store={myStore}>
        <InputFieldsWrapper />
      </Provider>,
    );
    const rythmFieldWrapper = myWrapper.find(InputField).at(2);
    rythmFieldWrapper.find("input").simulate("change", {target: {value: "02"}});

    const actions = myStore.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(updateInputFieldRythm("02:"));
  });
});
