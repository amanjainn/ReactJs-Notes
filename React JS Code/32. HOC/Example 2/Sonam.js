import React, { Component } from "react";
import Army from "./withArm";
class Sonam extends Component {
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.hochandleGunshots}>
          Sonam {this.props.hocgunname} GunShots:
          {this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Sonam);
