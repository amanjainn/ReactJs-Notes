import React, { Component } from "react";

export default class App extends Component {
  // Step 1 create state
  state = {
    value: "GeekyShows"
  };
  // Step 4 define onChange event handler
  // Step 6 Pass e object
  handleChange = e => {
    // Step 5 Change will appear when you try to change value
    console.log("change");

    // Step 7 watch out object e on console log
    // console.log(e);

    // Step 8 console the input value
    // console.log(e.target.value);

    // Step 9 Let change the input data, now you have more controll in data
    // this.setState({ value: e.target.value });

    // step 10 Let check how we can control data to make it upper case
    // this.setState({ value: e.target.value.toUpperCase() });

    // step 10 Let check how we can control data to make it limit character
    // this.setState({ value: e.target.value.substr(0, 10) });
  };
  render() {
    return (
      <div>
        <form>
          {/* Step 2 Assign above state to value */}
          {/* Step 3 Create onChange to control value */}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
