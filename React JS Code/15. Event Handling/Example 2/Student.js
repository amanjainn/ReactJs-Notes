import React from "react";

// You can use Arrow Function
function Student(props) {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <h1>Hello {props.name}</h1>;
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Student;
