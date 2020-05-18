import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome Guest</h1>
        <button onClick={this.props.onClick}>Login</button>
        <button>SignUp</button>
      </React.Fragment>
    );
  }
}
