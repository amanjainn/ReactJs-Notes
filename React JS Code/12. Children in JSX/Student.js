import React, { Component } from "react";

// Functional Component
// const Student = props => {
//   return <h1>Hello Rahul {props.children}</h1>;
// };

// Class based Component
class Student extends Component {
  render() {
    return <h1>Hello Rahul {this.props.children}</h1>;
  }
}

export default Student;
