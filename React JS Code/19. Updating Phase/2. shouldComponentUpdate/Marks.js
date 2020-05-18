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
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mroll < 107) {
      console.log("Mark - ShouldComponentUpdate");
      console.log(nextProps, nextState);
      return true;
    }
    console.log(nextProps, nextState);
    return false;
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
