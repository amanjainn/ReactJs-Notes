import React, { Component } from "react";
import Rahul from "./Rahul";
import Sonam from "./Sonam";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* passing props to HOC component */}
        <Rahul camp="120" />
        <Sonam camp="140" />
      </div>
    );
  }
}
