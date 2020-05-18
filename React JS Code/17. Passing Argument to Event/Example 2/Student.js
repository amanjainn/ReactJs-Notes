import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Rahul"
    };
  }

  handleClick = id => {
    console.log(id, "ID Deleted");
  };

  render() {
    return (
      <div>
        <h1>
          ID: {this.state.id} Name: {this.state.name}
        </h1>
        <button
          type="submit"
          onClick={() => {
            this.handleClick(this.state.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Student;
