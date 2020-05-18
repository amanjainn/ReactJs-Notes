import React, { Component } from "react";

class Student extends Component {
  // State Without Constructor or State Property
  state = {
    id: 1,
    name: "Rahul"
  };

  // Event Handler Arrow Function
  handleClick = (id, e) => {
    console.log(id);

    console.log(e);
  };

  handleClickArg = e => {
    this.handleClick(this.state.id, e);
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={this.handleClickArg}>Delete</button>
      </div>
    );
  }
}

export default Student;
