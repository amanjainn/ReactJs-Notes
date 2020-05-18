import React, { Component } from "react";
import Army from "./withArm";
class Rahul extends Component {
  render() {
    console.log(this.props.camp);
    return (
      <div>
        <h2>Camp: {this.props.camp}</h2>
        <h3 onMouseOver={this.props.hochandleGunshots}>
          Rahul {this.props.hocgunname} GunShots: {this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
// Passing addtional parameter to HOC
export default Army(Rahul, 10);
