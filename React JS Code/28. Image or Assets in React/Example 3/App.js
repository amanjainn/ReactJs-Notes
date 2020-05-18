import React, { Component } from "react";
import pic from "./pic.jpg";
export default class App extends Component {
  render() {
    return (
      <div>
        <img src={pic} alt="mypic" width="300px" />
      </div>
    );
  }
}
