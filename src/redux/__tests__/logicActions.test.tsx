import React from "react";
import thunk from "redux-thunk";

import configureStore, {
  MockStoreCreator,
  MockStore,
} from "@jedmao/redux-mock-store";
import RunningSport from "../../models/RunningSport";
import CyclingSport from "../../models/CyclingSport";

import {Provider} from "react-redux";
import {IState} from "../../redux/initialState";
import {
  updateInputFieldDistance,
  updateInputFieldTime,
  updateInputFieldRythm,
  changeSelectedSportAction,
} from "../../redux/actionCreators";

import {AppActionTypes} from "../actionCreators";
import {
  timeInputFieldChanged,
  rythmInputFieldChanged,
  updateRythmFromState,
  updateTimeFromState,
  myThunkDispatch,
  sportSelectorClicked,
  calculateLapTimes,
} from "../logicActions";

const initialState = {
  app: {
    sports: [CyclingSport, RunningSport, CyclingSport],
    selectedSport: 1,
    distanceFieldValue: "10000",
    timeFieldValue: "04:32:47",
    rythmFieldValue: "12:57",
    lapTimes: null,
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

  it("SportSelector clicked changes sport and refreshes rythm", () => {
    const store = mockStoreCreator(initialState);
    store.dispatch(sportSelectorClicked(0));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(changeSelectedSportAction(0));
    expect(actions[1].type).toEqual("UPDATE_INPUT_FIELD_RYTHM");
  });
});

describe("Logic action calculateLapTimes", () => {
  it("Simple case", () => {
    const myInitialState = {
      app: {
        sports: [CyclingSport, RunningSport, CyclingSport],
        selectedSport: 1,
        distanceFieldValue: "10000",
        timeFieldValue: "04:32:47",
        rythmFieldValue: "27:17",
        lapTimes: null,
      },
    };

    const result = [
      {label: "km 1", time: "00:27:17"},
      {label: "km 2", time: "00:54:33"},
      {label: "km 3", time: "01:21:50"},
      {label: "km 4", time: "01:49:07"},
      {label: "km 5", time: "02:16:24"},
      {label: "km 6", time: "02:43:40"},
      {label: "km 7", time: "03:10:57"},
      {label: "km 8", time: "03:38:14"},
      {label: "km 9", time: "04:05:30"},
      {label: "km 10", time: "04:32:47"},
    ];

    const store = mockStoreCreator(myInitialState);
    store.dispatch(calculateLapTimes());
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual("UPDATE_LAP_TIMES");
    expect(actions[0].payload).toEqual(result);
  });
});
