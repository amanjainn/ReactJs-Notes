import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.number * 10}</h1>
      </div>
    );
  }
}
