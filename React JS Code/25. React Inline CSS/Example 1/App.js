import React, { Component } from "react";
export default class App extends Component {
  render() {
    const btnStyle = {
      color: "blue",
      backgroundColor: "orange"
    };
    return (
      <React.Fragment>
        <button style={btnStyle}>Button</button>
      </React.Fragment>
    );
  }
}
