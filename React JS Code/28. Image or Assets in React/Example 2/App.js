import React, { Component } from "react";
export default class App extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/pic.jpg"}
          alt="mypic"
          width="300px"
        />
      </div>
    );
  }
}
