import React, { Component } from "react";
import User from "./User";
export const MyContext = React.createContext();
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
      <MyContext.Provider value={contextValue}>
        <User />
      </MyContext.Provider>
    );
  }
}
