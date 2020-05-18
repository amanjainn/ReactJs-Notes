import React, { Component } from "react";
const Army = (Men, shot) => {
  class NewMen extends Component {
    state = {
      gunshots: 0
    };
    handleGunshots = () => {
      this.setState({ gunshots: this.state.gunshots + shot });
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
