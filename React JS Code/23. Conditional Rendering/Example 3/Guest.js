import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome Guest</h1>
        {/* <h1>Welcome {this.props.name}</h1> */}
        <button onClick={this.props.clickData}>Login</button>
        <button>SignUp</button>
      </React.Fragment>
    );
  }
}
