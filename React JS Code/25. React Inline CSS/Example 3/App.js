import React, { Component } from "react";
export default class App extends Component {
  state = {
    change: false
  };
  clickHandle = () => {
    this.setState({ change: true });
  };
  render() {
    const btnStyle = {
      color: "blue",
      backgroundColor: "orange"
    };
    if (this.state.change) {
      btnStyle.backgroundColor = "white";
    }
    return (
      <button onClick={this.clickHandle} style={btnStyle}>
        Button
      </button>
    );
  }
}
