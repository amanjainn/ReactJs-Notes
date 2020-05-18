import React from "react";
import useCustomCounter from "./Custom";
function App() {
  const data = useCustomCounter();
  const data1 = useCustomCounter();
  return (
    <React.Fragment>
      <h1>Count Up: {data.count}</h1>
      <button type="button" onClick={data.handleIncrement}>
        Increment
      </button>

      <h1>Count Up: {data1.count}</h1>
      <button type="button" onClick={data1.handleIncrement}>
        Increment
      </button>
    </React.Fragment>
  );
}

export default App;
