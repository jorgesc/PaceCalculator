import React from "react";

import {Provider} from "react-redux";

import store from "./redux/store";

import SportSelectorWrapper from "./components/SportSelectorWrapper";

import RunningSport from "./models/RunningSport";
import CyclingSport from "./models/CyclingSport";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <SportSelectorWrapper />
      </div>
    </Provider>
  );
};

export default App;
