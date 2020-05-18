import React, { Component } from "react";
import User from "./User";
// If there is no Provider, not necessary to write below State
import { Provider } from "./Context";
export default class App extends Component {
  render() {
    return <User />;
  }
}
