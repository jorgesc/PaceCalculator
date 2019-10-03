import React from "react";
import SportSelector from "./components/SportSelector/SportSelector";

import RunningSport from "./models/RunningSport";
import CyclingSport from "./models/CyclingSport";

const App: React.FC = () => {
  return (
    <div className="App">
      <SportSelector
        sports={[RunningSport, CyclingSport, RunningSport, CyclingSport]}
        selected={0}
        onChange={e => {
          console.log("Changed!!", e);
        }}
      />
    </div>
  );
};

export default App;
