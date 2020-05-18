import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    // Creating a Property and assign it NULL
    this.backRef = null;
    // Creating a Method this will assign DOM element to ref created above
    this.setBackRef = element => {
      this.backRef = element;
    };
  }
  componentDidMount() {
    //
    if (this.backRef) {
      this.backRef.focus();
    }
  }
  render() {
    return (
      <form>
        Name: <input type="text" />
        <br />
        <br />
        {/* Attaching Ref */}
        {/* Input element will be passed as parameter to callback ref property  */}
        Password: <input type="text" ref={this.setBackRef} />
        <br />
        <br />
        Address: <input type="text" />
      </form>
    );
  }
}
