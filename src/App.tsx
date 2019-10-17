import React from "react";
import {createGlobalStyle} from "styled-components";

import {Provider} from "react-redux";

import store from "./redux/store";

import SportSelectorWrapper from "./components/SportSelectorWrapper";
import InputFieldsWrapper from "./components/InputFieldsWrapper";
import LeftPanelWrapper from "./components/LeftPanelWrapper";
import RightPanelWrapper from "./components/RightPanelWrapper";
import AppWrapper from "./components/AppWrapper";

import LapTimesTime, {Digit} from "./components/LapTimesTime";

import DistanceIcon from "./static/icon-distance.svg";

import RunningSport from "./models/RunningSport";
import CyclingSport from "./models/CyclingSport";

import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppWrapper />
      </div>
    </Provider>
  );
};

export default App;
