import React, { Component } from "react";
import girl1 from "./girl1.jpg";
import girl2 from "./girl2.jpg";
import Image from "./Image";
export default class App extends Component {
  render() {
    return (
      <div>
        <Image balike={girl1} /> <br />
        <Image balike={girl2} /> <br />
        <Image balike="NoImage" /> <br />
      </div>
    );
  }
}
