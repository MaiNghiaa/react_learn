import React, { Component } from "react";
import ChiaLayoutHeader2 from "./Sections/ChiaLayoutHeader2";
import ChiaLayoutMain2 from "./Sections/ChiaLayoutMain2";
import ChiaLayoutFooter2 from "./Sections/ChiaLayoutFooter2";
export default class Home extends Component {
  render() {
    return (
      <div>
        <ChiaLayoutHeader2 />
        <ChiaLayoutMain2 />
        <ChiaLayoutFooter2 />
      </div>
    );
  }
}
