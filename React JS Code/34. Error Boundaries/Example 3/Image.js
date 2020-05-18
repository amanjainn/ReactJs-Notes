import React, { Component } from "react";
export default class Image extends Component {
  render() {
    if (this.props.balike === "NoImage") {
      throw new Error("Image not found");
    }
    return <img src={this.props.balike} alt="My Pic" width="300px" />;
  }
}
