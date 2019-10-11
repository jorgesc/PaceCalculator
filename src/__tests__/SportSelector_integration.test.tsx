import React from "react";
import thunk from "redux-thunk";
import Enzyme, {shallow, mount, ReactWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import configureStore, {MockStoreCreator} from "redux-mock-store";

import {IState} from "../redux/store";
import {Provider} from "react-redux";

import SportSelectorWrapper from "../components/SportSelectorWrapper";
import SportSelectorButton from "../components/SportSelector/SportSelectorButton";
import RunningSport from "../models/RunningSport";
import CyclingSport from "../models/CyclingSport";

import {sportSelectorClicked} from "../redux/logicActions";

import * as logicActions from "../redux/logicActions";

Enzyme.configure({adapter: new Adapter()});

describe("SportSelector integration", () => {
  let mockStoreCreator: MockStoreCreator;
  let initialState: IState;

  beforeAll(() => {
    mockStoreCreator = configureStore([thunk]);
    initialState = {
      app: {
        sports: [RunningSport, RunningSport, CyclingSport],
        selectedSport: 0,
        distanceFieldValue: "",
        timeFieldValue: "",
        rythmFieldValue: "",
      },
    };
  });

  it("Contains the right elements", () => {
    const store = mockStoreCreator(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <SportSelectorWrapper />
      </Provider>,
    );

    const buttons = wrapper.find(SportSelectorButton);
    expect(buttons).toHaveLength(3);
    expect(buttons.at(0).text()).toEqual("Atletismo");
    expect(buttons.at(1).text()).toEqual("Atletismo");
    expect(buttons.at(2).text()).toEqual("Ciclismo");
  });

  it("The correct element is selected", () => {
    const store = mockStoreCreator(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <SportSelectorWrapper />
      </Provider>,
    );

    const buttons = wrapper.find(SportSelectorButton);
    expect(buttons.at(0).props().selected).toBe(true);
    expect(buttons.at(1).props().selected).toBe(false);
    expect(buttons.at(2).props().selected).toBe(false);
  });

  it("Fires the right action", () => {
    const myMock = jest.spyOn(logicActions, "sportSelectorClicked");
    const store = mockStoreCreator(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <SportSelectorWrapper />
      </Provider>,
    );

    const buttons = wrapper.find(SportSelectorButton);
    buttons.at(1).simulate("click");
    buttons.at(2).simulate("click");
    buttons.at(0).simulate("click");

    expect(myMock.mock.calls).toHaveLength(3);
    expect(myMock.mock.calls[0][0]).toEqual(1);
    expect(myMock.mock.calls[1][0]).toEqual(2);
    expect(myMock.mock.calls[2][0]).toEqual(0);

    // const actions = store.getActions();
    // expect(actions).toHaveLength(3);

    // expect(actions[0]).toEqual({
    //   type: "CHANGE_SELECTED_SPORT",
    //   payload: 1,
    // });
    // expect(actions[1]).toEqual({
    //   type: "CHANGE_SELECTED_SPORT",
    //   payload: 2,
    // });
    // expect(actions[2]).toEqual({
    //   type: "CHANGE_SELECTED_SPORT",
    //   payload: 0,
    // });
  });
});
