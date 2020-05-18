import React, { Component } from "react";
import { MyContext } from "./App";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component</h3>

        <MyContext.Consumer>
          {({ data, handleClick }) => (
            <div>
              <h4>
                Name: {data.name} Value: {data.value}
              </h4>
              <button onClick={handleClick}>Change Value</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
