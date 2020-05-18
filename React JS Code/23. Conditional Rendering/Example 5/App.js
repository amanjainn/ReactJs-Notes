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
        {(() => {
          if (isLoggedIn) {
            return <User clickData={this.clickLogout} />;
            // return <User name="Rahul" clickData={this.clickLogout} />;
          } else {
            return <Guest clickData={this.clickLogin} />;
            // return <Guest name="Guest" clickData={this.clickLogin} />;
          }
        })()}
      </div>
    );
  }
}
