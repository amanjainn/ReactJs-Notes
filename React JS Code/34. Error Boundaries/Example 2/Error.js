import React, { Component } from "react";

export default class Error extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h3>Error: Image Not Found</h3>;
    }
    return this.props.children;
  }
}
