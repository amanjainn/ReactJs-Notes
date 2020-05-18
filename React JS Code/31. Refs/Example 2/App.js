// Adding a Ref to a DOM Element

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  // Set the state for the ref
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.textInput.current.value });
  };

  render() {
    return (
      <React.Fragment>
        <h2>You Typed: {this.state.value}</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Attaching created ref to react element */}
          Input: <input type="text" ref={this.textInput} />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}
