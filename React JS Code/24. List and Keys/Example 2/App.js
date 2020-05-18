import React, { Component } from "react";

export default class App extends Component {
  render() {
    // Declaration and Initialization of Array
    const arr = [10, 20, 30, 40];
    return (
      <ul>
        {/* Embedding map() in JSX */}
        {arr.map(num => {
          return <li>{num}</li>;
        })}
      </ul>
      //   <ul>
      //   {arr.map(num => (
      //     <li>{num}</li>
      //   ))}
      // </ul>
    );
  }
}
