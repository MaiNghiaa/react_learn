import React, { Component } from "react";

export default class Styled extends Component {
  styled = {
    color: "#cccccc",
    "font-size": "24px",
  };
  render() {
    return (
      <div className={{ color: "#cccccc" }}>
        Styled
        <p className={this.styled}>asdasd</p>
      </div>
    );
  }
}
