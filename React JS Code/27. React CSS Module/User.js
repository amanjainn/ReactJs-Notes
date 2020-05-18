import React, { Component } from "react";
import Styles from "./User.module.css";
import Styles1 from "./App.module.css";
export default class User extends Component {
  render() {
    return (
      <div>
        <h2 className={Styles.txt}>Hello Users</h2>
        <h2 className={Styles1.txt}>Hello Users 1</h2>
      </div>
    );
  }
}
