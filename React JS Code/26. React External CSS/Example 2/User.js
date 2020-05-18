import React, { Component } from "react";
import "./App";
export default class User extends Component {
  render() {
    return <h2 className={this.props.rang}>Hello Users</h2>;
  }
}
