import React from "react";
import SportSelector from "./components/SportSelector";

import RunningSport from "./RunningSport";
import CyclingSport from "./CyclingSport";

const App: React.FC = () => {
  return (
    <div className="App">
      <SportSelector
        sports={[RunningSport, CyclingSport, RunningSport, CyclingSport]}
        selected={0}
      />
    </div>
  );
};

export default App;
