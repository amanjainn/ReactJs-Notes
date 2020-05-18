import React, { Component } from "react";

export default class User extends Component {
  componentWillMount() {
    console.log("User Component Will Mount");
  }
  render() {
    return <h1>Hello GeekyShows</h1>;
  }
}
