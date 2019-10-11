import React from "react";
import {createGlobalStyle} from "styled-components";

import {Provider} from "react-redux";

import store from "./redux/store";

import SportSelectorWrapper from "./components/SportSelectorWrapper";
import InputFieldsWrapper from "./components/InputFieldsWrapper";
import LeftPanelWrapper from "./components/LeftPanelWrapper";
import AppWrapper from "./components/AppWrapper";

import DistanceIcon from "./static/icon-distance.svg";

import RunningSport from "./models/RunningSport";
import CyclingSport from "./models/CyclingSport";

const GlobalStyles = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css?family=Days+One&display=swap");
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  }
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyles />
        <AppWrapper />
      </div>
    </Provider>
  );
};

export default App;
