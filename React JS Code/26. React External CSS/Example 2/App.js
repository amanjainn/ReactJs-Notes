import React, { Component } from "react";
import User from "./User";
import "./App.css";
export default class App extends Component {
  render() {
    let style = false;
    return (
      <React.Fragment>
        <h1 className="txtb">Hello App</h1>
        <User rang={style ? "txtb" : "txtg"} />
      </React.Fragment>
    );
  }
}
