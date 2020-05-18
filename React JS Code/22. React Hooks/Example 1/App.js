import React, { useState } from "react";
function App() {
  const nameStateVariable = useState("Rahul");
  const handleClick = () => {
    nameStateVariable[1]("GeekyShows");
  };
  return (
    <React.Fragment>
      <h1>{nameStateVariable[0]}</h1>
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </React.Fragment>
  );
}
export default App;
