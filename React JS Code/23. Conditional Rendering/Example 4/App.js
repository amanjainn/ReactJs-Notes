import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";
export default class App extends Component {
  state = {
    isLoggedIn: false
  };
  clickLogin = () => {
    console.log("Login");
    this.setState({ isLoggedIn: true });
  };
  clickLogout = () => {
    console.log("logout");
    this.setState({ isLoggedIn: false });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? (
          <User onClick={this.clickLogout} />
        ) : (
          <Guest onClick={this.clickLogin} />
        )}
      </div>
    );
  }
}
