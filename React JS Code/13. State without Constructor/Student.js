import React, { Component } from "react";

class Student extends Component {
  state = {
    name: "Rahul",
    roll: this.props.roll
  };
  render() {
    return (
      <h1>
        Hello, {this.state.name} You Roll Number is {this.state.roll}
      </h1>
    );
  }
}

export default Student;
