import React, { Component } from "react";
import { Consumer } from "./Context";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component</h3>
        <Consumer>
          {value => (
            <div>
              <h4>{value}</h4>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
