import React, { Component } from "react";
import User from "./User";

export default class App extends Component {
  render() {
    // Declaration and Initialization of Array using props
    const arr = this.props.numbers;
    // Using Array Map Method
    const newArr = arr.map(num => {
      return <User key={num} value={num} />;
    });
    return <ul>{newArr}</ul>;
  }
}
