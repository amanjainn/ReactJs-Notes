import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component</h3>
        <h4>{this.props.nm}</h4>
      </div>
    );
  }
}
