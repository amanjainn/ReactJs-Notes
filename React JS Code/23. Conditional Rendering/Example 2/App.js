import React, { Component } from "react";
import User from "./User";

export default class App extends Component {
  render() {
    const primeMember = this.props.primeMember;
    return (
      <React.Fragment>
        <h1>Welcome User </h1>
        {primeMember && <User />}
      </React.Fragment>
    );
  }
}
