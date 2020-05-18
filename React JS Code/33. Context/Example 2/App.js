import React, { Component } from "react";
import User from "./User";
export const MyContext = React.createContext();
export default class App extends Component {
  state = {
    name: "Rahul"
  };
  render() {
    return (
      <MyContext.Provider value={this.state.name}>
        <User />
      </MyContext.Provider>
    );
  }
}
