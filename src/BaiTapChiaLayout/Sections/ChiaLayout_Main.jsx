import React, { Component } from "react";

export default class ChiaLayout_Main extends Component {
  render() {
    return (
      <div className="flex flex-1">
        <div className="bg-sky-300">Left Main </div>
        <div className="bg-pink-300 w-[100%]">Right Main</div>
      </div>
    );
  }
}
