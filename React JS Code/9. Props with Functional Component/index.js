import React from "react";
import ReactDOM from "react-dom";
import Student from "./Student";

// Rending Component
ReactDOM.render(
  <Student name="Rahul" roll="101" />,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Student name={"Rahul"} roll="101" />,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <Student name="Rahul" roll={100 + 1} />,
//   document.getElementById("root")
// );
