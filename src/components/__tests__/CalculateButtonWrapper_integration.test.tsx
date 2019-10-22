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
} from "../../redux/actionCreators";

import CalculateButtonWrapper from "../CalculateButtonWrapper";
import CalculateButtonContainer from "../CalculateButton/CalculateButtonContainer";

Enzyme.configure({adapter: new Adapter()});

import * as ActionsModule from "../../redux/logicActions";

describe("CalculateButtonWrapper", () => {
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
        lapTimes: null,
      },
    };
    store = mockStoreCreator(initialState);
    wrapper = mount(
      <Provider store={store}>
        <CalculateButtonWrapper />
      </Provider>,
    );
  });

  it("It is visible when store lapTimes is null", () => {
    const myComponent = wrapper.find(CalculateButtonContainer);
    expect(myComponent.at(0).props().hidden).toBe(false);
  });

  it("Is is hidden when store lapTimes exists", () => {
    const myInitialState = {
      app: {
        ...initialState.app,
        lapTimes: [
          {label: "km 1", time: "01:55:43"},
          {label: "km 2", time: "01:55:43"},
        ],
      },
    };
    const myStore = mockStoreCreator(myInitialState);
    const myWrapper = mount(
      <Provider store={myStore}>
        <CalculateButtonWrapper />
      </Provider>,
    );
    const myComponent = myWrapper.find(CalculateButtonContainer);
    expect(myComponent.props().hidden).toBe(true);
  });

  it("Its button is disabled when all input fields are empty", () => {
    const myInitialState = {
      app: {
        ...initialState.app,
        distanceFieldValue: "",
        rythmFieldValue: "",
        timeFieldValue: "",
      },
    };
    const myStore = mockStoreCreator(myInitialState);
    const myWrapper = mount(
      <Provider store={myStore}>
        <CalculateButtonWrapper />
      </Provider>,
    );
    const myComponent = myWrapper.find("button");
    expect(myComponent.props().disabled).toBe(true);
  });

  it("Its button is disabled when distance input field is empty", () => {
    const myInitialState = {
      app: {
        ...initialState.app,
        distanceFieldValue: "",
      },
    };
    const myStore = mockStoreCreator(myInitialState);
    const myWrapper = mount(
      <Provider store={myStore}>
        <CalculateButtonWrapper />
      </Provider>,
    );
    const myComponent = myWrapper.find("button");
    expect(myComponent.props().disabled).toBe(true);
  });

  it("Its button is disabled when time input field is empty", () => {
    const myInitialState = {
      app: {
        ...initialState.app,
        timeFieldValue: "",
      },
    };
    const myStore = mockStoreCreator(myInitialState);
    const myWrapper = mount(
      <Provider store={myStore}>
        <CalculateButtonWrapper />
      </Provider>,
    );
    const myComponent = myWrapper.find("button");
    expect(myComponent.props().disabled).toBe(true);
  });

  it("Its button is disabled when rythm input field is empty", () => {
    const myInitialState = {
      app: {
        ...initialState.app,
        rythmFieldValue: "",
      },
    };
    const myStore = mockStoreCreator(myInitialState);
    const myWrapper = mount(
      <Provider store={myStore}>
        <CalculateButtonWrapper />
      </Provider>,
    );
    const myComponent = myWrapper.find("button");
    expect(myComponent.props().disabled).toBe(true);
  });

  it("Clicking on calculate button calls the right action", () => {
    const spy = jest.spyOn(ActionsModule, "calculateLapTimes");
    wrapper.find("button").simulate("click");
    expect(spy.mock.calls).toHaveLength(1);
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual("UPDATE_LAP_TIMES");
  });
});
