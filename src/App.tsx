import React from "react";
import {createGlobalStyle} from "styled-components";

import {Provider} from "react-redux";
import store from "./redux/store";
import AppWrapper from "./components/AppWrapper";

const GlobalStyle = createGlobalStyle`
  body {
  @import url("https://fonts.googleapis.com/css?family=Days+One&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");

  }
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <AppWrapper />
      </div>
    </Provider>
  );
};

export default App;
