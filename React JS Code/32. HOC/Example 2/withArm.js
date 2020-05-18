import React, { Component } from "react";
const Army = Men => {
  class NewMen extends Component {
    state = {
      gunshots: 0
    };
    handleGunshots = () => {
      this.setState({ gunshots: this.state.gunshots + 1 });
    };
    render() {
      return (
        <Men
          hocgunname="AK47"
          hocgunshots={this.state.gunshots}
          hochandleGunshots={this.handleGunshots}
        />
      );
    }
  }
  return NewMen;
};
export default Army;
