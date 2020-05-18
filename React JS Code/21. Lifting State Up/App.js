import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";
export default class App extends Component {
  state = {
    value: 20
  };
  render() {
    return (
      <div>
        <User num={this.state.value} />
        <Guest number={this.state.value} />
      </div>
    );
  }
}
