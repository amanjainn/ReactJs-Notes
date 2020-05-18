import React, { Component } from "react";
import girl1 from "./girl1.jpg";
import girl2 from "./girl2.jpg";
import Image from "./Image";
import Error from "./Error";
export default class App extends Component {
  render() {
    return (
      <div>
        <Error>
          <Image balike={girl1} /> <br />
          <Image balike={girl2} /> <br />
          <Image balike="NoImage" /> <br />
        </Error>
      </div>
    );
  }
}
