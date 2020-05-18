import React, { Component } from "react";
import User from "./User";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="txt">Hello App</h1>
        <User />
      </React.Fragment>
    );
  }
}
