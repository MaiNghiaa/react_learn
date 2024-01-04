import React, { Component } from "react";

export default class PropsChildC extends Component {
  render() {
    return <div>{this.props.test}</div>;
  }
}
