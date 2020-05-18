import React, { Component } from "react";
import Student from "./Student";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor Called");
    console.log(props);
  }
  render() {
    console.log("App - Rendered");
    return (
      <div>
        <Student name="Rahul" />
      </div>
    );
  }
}
