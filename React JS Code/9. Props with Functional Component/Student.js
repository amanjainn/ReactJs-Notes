import React from "react";
const Student = props => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Your Roll {props.roll}</h2>
    </div>
  );
};

export default Student;
