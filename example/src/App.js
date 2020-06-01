import React from "react";

import { Wrapper } from "react-flip";
import "react-flip/dist/index.css";

const App = () => {
  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Wrapper />
    </div>
  );
};

export default App;
