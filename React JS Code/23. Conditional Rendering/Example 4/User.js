import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome Rahul</h1>
        <button onClick={this.props.onClick}>Logout</button>
      </React.Fragment>
    );
  }
}
