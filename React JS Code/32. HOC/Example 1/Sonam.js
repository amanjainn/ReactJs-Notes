import React, { Component } from "react";
import Army from "./withArm";
class Sonam extends Component {
  state = {
    gunshots: 0
  };
  handleGunshots = () => {
    this.setState({ gunshots: this.state.gunshots + 1 });
  };
  render() {
    return (
      <div>
        <h3 onMouseOver={this.handleGunshots}>
          Sonam {this.props.hocgunname} GunShots:
          {this.state.gunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Sonam);
