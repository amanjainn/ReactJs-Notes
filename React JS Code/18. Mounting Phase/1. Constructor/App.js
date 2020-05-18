import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor Called");
    console.log(props);
  }
  render() {
    return <h1>Hello Rahul</h1>;
  }
}
