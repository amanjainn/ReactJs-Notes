import React, { Component } from "react";
import { Consumer } from "./Context";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component</h3>
        <Consumer>
          {({ data, handleClick }) => (
            <div>
              <h4>
                Name: {data.name} Value: {data.value}
              </h4>
              <button onClick={handleClick}>Change Value</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
