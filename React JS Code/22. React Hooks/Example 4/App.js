import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Use Effect Called");
  });

  return (
    <React.Fragment>
      <h1>Count Up: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </React.Fragment>
  );
}

export default App;
