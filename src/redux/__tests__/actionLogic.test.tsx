import React from "react";
import thunk from "redux-thunk";

import configureStore, {
  MockStoreCreator,
  MockStore,
} from "@jedmao/redux-mock-store";
import RunningSport from "../../models/RunningSport";
import CyclingSport from "../../models/CyclingSport";

import {Provider} from "react-redux";
import {IState} from "../../redux/store";
import {
  updateInputFieldDistance,
  updateInputFieldTime,
  updateInputFieldRythm,
} from "../../redux/actionCreators";

import {AppActionTypes} from "../actionCreators";
import {
  timeInputFieldChanged,
  rythmInputFieldChanged,
  updateRythmFromState,
  updateTimeFromState,
  myThunkDispatch,
} from "../actions";

const initialState = {
  app: {
    sports: [CyclingSport, RunningSport, CyclingSport],
    selectedSport: 1,
    distanceFieldValue: "10000",
    timeFieldValue: "04:32:47",
    rythmFieldValue: "12:57",
  },
};

const mockStoreCreator = configureStore<
  IState,
  AppActionTypes,
  myThunkDispatch
>([thunk]);

describe("Action logic tests", () => {
  it("updateTimeFromState works", () => {
    const store = mockStoreCreator(initialState);
    store.dispatch(updateTimeFromState());
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(
      updateInputFieldTime(
        RunningSport.calculateTotalTimeFromRythm(10000, "12:57"),
      ),
    );
  });

  it("updateRythmFromState works", () => {
    const store = mockStoreCreator(initialState);
    store.dispatch(updateRythmFromState());
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(
      updateInputFieldRythm(
        RunningSport.calculateRythmFromTotalTime(10000, "04:32:47"),
      ),
    );
  });

  it("timeInputFieldChanged updates time and rythm fields", () => {
    const t = "23:45:11";
    const store = mockStoreCreator(initialState);
    store.dispatch(timeInputFieldChanged(t));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(updateInputFieldTime(t));
    expect(actions[1]).toEqual(
      updateInputFieldRythm(
        RunningSport.calculateRythmFromTotalTime(10000, "04:32:47"),
      ),
    );
  });

  it("rythmInputFieldChanged updates rythm and time fields", () => {
    const t = "23:45";
    const store = mockStoreCreator(initialState);
    store.dispatch(rythmInputFieldChanged(t));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(updateInputFieldRythm(t));
    expect(actions[1]).toEqual(
      updateInputFieldTime(
        RunningSport.calculateTotalTimeFromRythm(10000, "12:57"),
      ),
    );
  });
});
