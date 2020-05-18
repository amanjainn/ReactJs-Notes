import React, { Component } from "react";

export default class App extends Component {
  render() {
    // Declaration and Initialization of Array using props
    const arr = this.props.numbers;
    return (
      <ul>
        {/* Embedding map() in JSX */}
        {arr.map(num => {
          return <li>{num}</li>;
        })}
      </ul>
    );
  }
}
