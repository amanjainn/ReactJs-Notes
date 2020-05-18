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
    let consumer;
    if (isLoggedIn) {
      consumer = <User clickData={this.clickLogout} />;
      // consumer = <User name="Rahul" clickData={this.clickLogout} />;
    } else {
      consumer = <Guest clickData={this.clickLogin} />;
      // consumer = <Guest name="Guest" clickData={this.clickLogin} />;
    }
    return <div>{consumer}</div>;
  }
}
