import React, { Component } from "react";
import Marks from "./Marks";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      roll: 101
    };
  }
  clickHandle = () => {
    console.log("Button Cliked");
    this.setState({ roll: 102 });
	// this.setState({ roll: this.state.roll + 2 });
  };
  render() {
    console.log("Student Rendered");
    return (
      <div>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickHandle}>Change Prop</button>
      </div>
    );
  }
}
