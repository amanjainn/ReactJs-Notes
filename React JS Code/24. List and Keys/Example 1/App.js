import React, { Component } from "react";

export default class App extends Component {
  render() {
    const arr = [10, 20, 30, 40];
    return (
      <ul>
        <li>{arr[0] * 2}</li>
        <li>{arr[1] * 2}</li>
        <li>{arr[2] * 2}</li>
        <li>{arr[3] * 2}</li>
      </ul>
    );
    /*
    // Declaration and Initialization of Array
    const arr = [10, 20, 30, 40];

    // Using Array Map Method
    const newArr = arr.map(num => {
      console.log("Num =", num);
      return <li>{num * 2}</li>;
    });
    console.log("OldArray = ", arr);
    // newArray is an Array having 4 elements and each element is an object
    // each object is a react element li
    console.log("newArray = ", newArr);
    return <ul>{newArr}</ul>;
    */
  }
}
