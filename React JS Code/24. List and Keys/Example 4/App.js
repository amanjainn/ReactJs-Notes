import React, { Component } from "react";

export default class App extends Component {
  state = {
    users: [
      { id: 101, name: "Rahul", password: "3423ssdf" },
      { id: 102, name: "Sonam", password: "654yuei" },
      { id: 103, name: "Sumit", password: "687xvf" }
    ],
    isLoggedIn: false
  };
  render() {
    // return (
    //   <div>
    //     <h1>
    //       ID: {this.state.users[0].id} Name: {this.state.users[0].name}{" "}
    //       Password: {this.state.users[0].password}
    //     </h1>
    //     <h1>
    //       ID: {this.state.users[1].id} Name: {this.state.users[1].name}{" "}
    //       Password: {this.state.users[1].password}
    //     </h1>
    //     <h1>
    //       ID: {this.state.users[2].id} Name: {this.state.users[2].name}{" "}
    //       Password: {this.state.users[2].password}
    //     </h1>
    //   </div>
    // );

    const newUsers = this.state.users.map(user => {
      // console.log(user);
      return (
        <h1>
          ID: {user.id} Name: {user.name} Password: {user.password}
        </h1>
      );
    });
    return <div>{newUsers}</div>;
  }
}
