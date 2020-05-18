import React, { Component } from "react";

export default class App extends Component {
  // Step 1 create state
  state = {
    value: "Hello there, this is some text in a text area"
  };
  // Step 4 define onChange event handler
  handleChange = e => {
    // Step 5 Let change the input data, now you have more controll in data
    this.setState({ value: e.target.value });

    // step 6 Let check how we can control data to make it upper case
    // this.setState({ value: e.target.value.toUpperCase() });

    // step 7 Let check how we can control data to make it limit character
    // this.setState({ value: e.target.value.substr(0, 20) });
  };
  render() {
    return (
      <div>
        <form>
          {/* Step 2 Assign above state to value */}
          {/* Step 3 Create onChange to control value */}
          <textarea value={this.state.value} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
