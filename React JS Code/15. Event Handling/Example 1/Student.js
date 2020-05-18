import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rahul",
      roll: this.props.roll
    };
    // It is necessary to bind handleClick
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // If we won't bind this will become undefined inside function
    console.log("Button Click ", this);
  }

  /* Alternative to avoid bind is use Arrow Function
  // In Arrow Function we do not need to bind becoz Arrow Function inherit this 
  // So it is good idea to use Arrow function instead just regular Function 
  handleClick = () => {
    console.log("Button Click ", this);
  }; */

  render() {
    return (
      <div>
        <h1>
          Hello, {this.state.name} Your Roll Number is {this.state.roll}
        </h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Student;
