import React, { Component } from "react";
import Pt from "prop-types";
// Class Component
class Student extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>Your Roll {this.props.roll}</h2>
      </div>
    );
  }
}

Student.propTypes = {
  name: Pt.string.isRequired,
  roll: Pt.number
};

Student.defaultProps = {
  name: "GeekyShows"
};

export default Student;
