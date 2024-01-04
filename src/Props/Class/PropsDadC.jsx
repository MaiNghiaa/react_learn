import React, { Component } from "react";
import PropsChildC from "./PropsChildC";

export default class PropsDadC extends Component {
  render() {
    return (
      <div>
        <PropsChildC test="Day la PropsChildC" />
      </div>
    );
  }
}
