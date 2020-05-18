import React, { Component } from "react";
import Army from "./withArm";
class Rahul extends Component {
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.hochandleGunshots}>
          Rahul {this.props.hocgunname} GunShots: {this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Rahul);
