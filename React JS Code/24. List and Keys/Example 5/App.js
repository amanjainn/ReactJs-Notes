import React, { Component } from "react";

export default class App extends Component {
  state = {
    users: [
      { id: 101, name: "Rahul", password: "3423ssdf" },
      { id: 102, name: "Sonam", password: "654yuei" },
      { id: 103, name: "Rahul", password: "687xvf" }
    ],
    isLoggedIn: false
  };
  render() {
    const newUsers = this.state.users.map(user => {
      return (
        <h1 key={user.id}>
          ID: {user.id} Name: {user.name} Password: {user.password}
        </h1>
      );
    });
    return <div>{newUsers}</div>;
  }
}
