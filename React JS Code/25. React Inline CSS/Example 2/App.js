import React, { Component } from "react";
export default class App extends Component {
  render() {
    const txtc = {
      color: "blue"
    };
    const txts = {
      fontSize: "80px"
    };

    return (
      <React.Fragment>
        <h1 style={{ ...txtc, ...txts }}>Hello App</h1>
        {/* <h1 style={{ ...txtc, ...{ fontSize: "200px" } }}>Hello App</h1> */}
      </React.Fragment>
    );
  }
}
