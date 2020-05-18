import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived From Props");
    console.log(props, state);
    if (props.roll !== state.mroll) {
      // console.log(props, state);
      return { mroll: props.roll };
    }
    return null;
  }
  render() {
    console.log("Marks Rendered");
    return (
      <div>
        <h1>{this.state.mroll}</h1>
      </div>
    );
  }
}
