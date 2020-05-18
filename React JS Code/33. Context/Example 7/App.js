import React, { Component } from "react";
import User from "./User";
import { Provider } from "./Context";
export default class App extends Component {
  state = {
    name: "Rahul",
    value: 10
  };
  handleClickContext = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    const contextValue = {
      data: this.state,
      handleClick: this.handleClickContext
    };
    return (
      <Provider value={contextValue}>
        <User />
      </Provider>
    );
  }
}
