import React, { Component } from "react";
import { MyContext } from "./App";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component</h3>

        <MyContext.Consumer>
          {data => (
            <h4>
              Name: {data.name} Value: {data.value}
            </h4>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
