// Adding a Ref to a DOM Element

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.textInput.current);
    this.textInput.current.focus();
  }
  render() {
    return (
      <form>
        Name: <input type="text" />
        <br />
        <br />
        {/* Attaching created ref to react element */}
        Password: <input type="text" ref={this.textInput} />
        <br />
        <br />
        Address: <input type="text" />
      </form>
    );
  }
}
