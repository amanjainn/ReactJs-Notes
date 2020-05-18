import React, { useState } from "react";
function App() {
  const [name, setName] = useState("Rahul");
  const [roll, setRoll] = useState(101);
  
  const handleClick = () => {
    setName("GeekyShows");
    setRoll(105);
  };

  return (
    <React.Fragment>
      <h1>Name: {name}</h1>
      <h2>Roll: {roll}</h2>
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </React.Fragment>
  );
}

export default App;
