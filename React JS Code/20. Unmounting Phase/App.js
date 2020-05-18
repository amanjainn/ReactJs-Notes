import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    console.log("App Mounted");
  }
  componentWillUnmount() {
    console.log("App Unmounted");
  }
  render() {
    return <h1>Hello App</h1>;
  }
}
