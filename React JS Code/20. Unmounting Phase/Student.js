import React, { Component } from "react";

export default class Student extends Component {
  componentDidMount() {
    console.log("Student Mounted");
  }
  render() {
    return <h1>Hello Student</h1>;
  }
}
