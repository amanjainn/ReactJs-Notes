import React, { Component } from "react";
import Student from "./Student";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor Called");
    console.log(props);
    this.state = {
      roll: "101"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App - Get Derived State From Props");
    console.log(props, state);
    return null;
  }
  componentDidMount() {
    // Get data from Server and set the data to state
    console.log("App - componentDidMount - Mounted");
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
