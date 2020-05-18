import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "name",
    password: "password"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    // const value =
    //   e.target.name === "password"
    //     ? e.target.value.toUpperCase().substr(0, 10)
    //     : e.target.value;
    // // console.log({ [e.target.name]: value });
    // this.setState({ [e.target.name]: value });
  };
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br /> <br />
          <label>
            Password:
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
